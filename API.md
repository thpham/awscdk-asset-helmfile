# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmfileLayer <a name="HelmfileLayer" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer"></a>

A CDK Asset construct that contains `kubectl` and `helm`.

#### Initializers <a name="Initializers" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.Initializer"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

new HelmfileLayer(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.addPermission">addPermission</a></code> | Add permission for this layer version to specific entities. |

---

##### `toString` <a name="toString" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPermission` <a name="addPermission" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.addPermission"></a>

```typescript
public addPermission(id: string, permission: LayerVersionPermission): void
```

Add permission for this layer version to specific entities.

Usage within
the same account where the layer is defined is always allowed and does not
require calling this method. Note that the principal that creates the
Lambda function using the layer (for example, a CloudFormation changeset
execution role) also needs to have the ``lambda:GetLayerVersion``
permission on the layer version.

###### `id`<sup>Required</sup> <a name="id" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.addPermission.parameter.id"></a>

- *Type:* string

---

###### `permission`<sup>Required</sup> <a name="permission" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionPermission

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionArn">fromLayerVersionArn</a></code> | Imports a layer version by ARN. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionAttributes">fromLayerVersionAttributes</a></code> | Imports a Layer that has been defined externally. |

---

##### `isConstruct` <a name="isConstruct" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isConstruct"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

HelmfileLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isOwnedResource"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

HelmfileLayer.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isResource"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

HelmfileLayer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLayerVersionArn` <a name="fromLayerVersionArn" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionArn"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

HelmfileLayer.fromLayerVersionArn(scope: Construct, id: string, layerVersionArn: string)
```

Imports a layer version by ARN.

Assumes it is compatible with all Lambda runtimes.

###### `scope`<sup>Required</sup> <a name="scope" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionArn.parameter.id"></a>

- *Type:* string

---

###### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionArn.parameter.layerVersionArn"></a>

- *Type:* string

---

##### `fromLayerVersionAttributes` <a name="fromLayerVersionAttributes" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionAttributes"></a>

```typescript
import { HelmfileLayer } from '@thkpham/lambda-layer-helmfile-v0'

HelmfileLayer.fromLayerVersionAttributes(scope: Construct, id: string, attrs: LayerVersionAttributes)
```

Imports a Layer that has been defined externally.

###### `scope`<sup>Required</sup> <a name="scope" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent Construct that will use the imported layer.

---

###### `id`<sup>Required</sup> <a name="id" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionAttributes.parameter.id"></a>

- *Type:* string

the id of the imported layer in the construct tree.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.fromLayerVersionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionAttributes

the properties of the imported layer.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.layerVersionArn">layerVersionArn</a></code> | <code>string</code> | The ARN of the Lambda Layer version that this Layer defines. |
| <code><a href="#@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime[]</code> | The runtimes compatible with this Layer. |

---

##### `node`<sup>Required</sup> <a name="node" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.layerVersionArn"></a>

```typescript
public readonly layerVersionArn: string;
```

- *Type:* string

The ARN of the Lambda Layer version that this Layer defines.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@thkpham/lambda-layer-helmfile-v0.HelmfileLayer.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: Runtime[];
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime[]

The runtimes compatible with this Layer.

---





