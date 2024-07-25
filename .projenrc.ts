import { awscdk, Gitpod, DevEnvironmentDockerImage, ReleasableCommits } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
import { WorkflowNoDockerPatch } from './projenrc/workflow-no-docker-patch';

// the version of helmfile this branch supports
const SPEC_VERSION = '0';
const releaseWorkflowName = `release-helmfile-v${SPEC_VERSION}`;
const defaultReleaseBranchName = `helmfile-v${SPEC_VERSION}/main`;

const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  author: 'thpham',
  authorAddress: '224674+thpham@users.noreply.github.com',
  cdkVersion: '2.149.0',
  constructsVersion: '10.3.0',
  name: `@thkpham/lambda-layer-helmfile-v${SPEC_VERSION}`,
  description: `A Lambda Layer that contains Helmfile v${SPEC_VERSION}`,
  repositoryUrl: 'https://github.com/thpham/awscdk-asset-helmfile.git',
  homepage: 'https://github.com/thpham/awscdk-asset-helmfile#readme',
  autoApproveOptions: {
    allowedUsernames: ['thpham'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  // We support the last 3 minor versions just like Kubernetes
  depsUpgradeOptions: {
    workflowOptions: {
      branches: [
        `helmfile-v${SPEC_VERSION}/main`,
      //`helmfile-v${Number(SPEC_VERSION)-1}/main`,
      ],
      labels: ['auto-approve'],
    },
  },
  minNodeVersion: '18.20.4',
  majorVersion: 2,
  npmAccess: NpmAccess.PUBLIC,
  releaseTagPrefix: `helmfile-v${SPEC_VERSION}`,
  releaseWorkflowName: releaseWorkflowName,
  // If we don't do this we release the devDependency updates that happen every day, which blows out
  // our PyPI storage budget even though there aren't any functional changes.
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  defaultReleaseBranch: defaultReleaseBranchName,
  publishToPypi: {
    distName: `thpham.lambda-layer-helmfile-v${SPEC_VERSION}`,
    module: `thpham.lambda_layer_helmfile_v${SPEC_VERSION}`,
  },
  githubOptions: {
    mergifyOptions: {
      rules: [{
        name: 'backport patches to helmfile-v0.+ branches',
        conditions: [
          'label=backport-to-helmfile-v0.+',
          `base=helmfile-v${SPEC_VERSION}/main`,
        ],
        actions: {
          backport: {
            regexes: [`helmfile-v(?!0.|${SPEC_VERSION})[\\d]*\\/main`],
            labels: ['auto-approve'],
          },
        },
      }],
    },
  },
});

project.addDevDeps('jsii@~5.4.26');
project.addDevDeps('jsii-rosetta@~5.4.25');
project.addDevDeps('@types/node@^20 <= 20.12.0');

// Fix Docker on GitHub
new WorkflowNoDockerPatch(project, { workflow: 'build' });
new WorkflowNoDockerPatch(project, { workflow: 'release', workflowName: `release-helmfile-v${SPEC_VERSION}` });

project.preCompileTask.exec('layer/build.sh');

// For gitpod users, use jsii/superchain as the dockerImage for the workspace.
const gitpod = new Gitpod(project, {
  dockerImage: DevEnvironmentDockerImage.fromImage('public.ecr.aws/jsii/superchain:1-bookworm-slim-node20'),
});

gitpod.addVscodeExtensions(
  'dbaeumer.vscode-eslint',
  'AmazonWebServices.aws-toolkit-vscode',
);

project.synth();
