import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { HelmfileLayer } from '../lib';

/**
 * Test verifies that helm and helmfile are invoked successfully inside Lambda runtime.
 */
const app = new cdk.App();
const stack = new cdk.Stack(app, 'lambda-layer-helmfile-integ-stack');
const layer = new HelmfileLayer(stack, 'HelmfileLayer');

const runtimes = [
  lambda.Runtime.PYTHON_3_9,
  new lambda.Runtime('python3.10', lambda.RuntimeFamily.PYTHON),
  new lambda.Runtime('python3.11', lambda.RuntimeFamily.PYTHON),
  new lambda.Runtime('python3.12', lambda.RuntimeFamily.PYTHON),
];

for (const runtime of runtimes) {
  const provider = new cr.Provider(stack, `Provider${runtime.name}`, {
    onEventHandler: new lambda.Function(stack, `Lambda$${runtime.name}`, {
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
      handler: 'index.handler',
      runtime: runtime,
      layers: [layer],
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
    }),
  });

  new cdk.CustomResource(stack, `CustomResource${runtime.name}`, {
    serviceToken: provider.serviceToken,
  });

}

app.synth();
