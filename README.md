# Lambda Layer with Helmfile v1.0.0
<!--BEGIN STABILITY BANNER-->

---

![cdk-constructs: Stable](https://img.shields.io/badge/cdk--constructs-stable-success.svg?style=for-the-badge)

---

<!--END STABILITY BANNER-->

This module exports a single class called `HelmfileLayer` which is a `lambda.LayerVersion` that
bundles the [`helm`](https://helm.sh/) and the
[`helmfile`](https://helmfile.readthedocs.io/en/latest/) command line.

> - Helm Version: 3.15.3
> - Helmfile Version: 1.0.0

Usage:

```ts
// HelmfileLayer bundles the 'helm' and 'helmfile' command lines
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v1';
import * as lambda from 'aws-cdk-lib/aws-lambda';

declare const fn: lambda.Function;
const helmfile = new HelmfileLayer(this, 'HelmfileLayer');
fn.addLayers(helmfile);
```

`helm` will be installed under `/opt/helm/helm` and `helmfile` will be installed under `/opt/helmfile/helmfile`.
