---
title: "EmptyFormulaDef"
---
# Interface: EmptyFormulaDef<ParamsT\>

Inputs to define an "empty" formula, that is, a formula that uses a [RequestHandlerTemplate](RequestHandlerTemplate.md)
to define an implementation for the formula rather than implementing an actual `execute` function
in JavaScript. An empty formula returns a string. To return a list of objects, see
[ObjectArrayFormulaDef](ObjectArrayFormulaDef.md).

This type is generally not used directly, but describes the inputs to [makeEmptyFormula](../functions/makeEmptyFormula.md).

## Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsT` | extends [`ParamDefs`](../types/ParamDefs.md) |

## Hierarchy

- `Omit`<[`PackFormulaDef`](PackFormulaDef.md)<`ParamsT`, `string`\>, ``"execute"``\>

  ↳ **`EmptyFormulaDef`**

## Properties

### cacheTtlSecs

• `Optional` `Readonly` **cacheTtlSecs**: `number`

How long formulas running with the same values should cache their results for.

#### Inherited from

Omit.cacheTtlSecs

#### Defined in

[api_types.ts:316](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L316)

___

### connectionRequirement

• `Optional` `Readonly` **connectionRequirement**: [`ConnectionRequirement`](../enums/ConnectionRequirement.md)

Does this formula require a connection (aka an account)?

#### Inherited from

Omit.connectionRequirement

#### Defined in

[api_types.ts:308](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L308)

___

### description

• `Readonly` **description**: `string`

A brief description of what the formula does.

#### Inherited from

Omit.description

#### Defined in

[api_types.ts:282](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L282)

___

### examples

• `Optional` `Readonly` **examples**: { `params`: (`undefined` \| [`PackFormulaValue`](../types/PackFormulaValue.md))[] ; `result`: [`PackFormulaResult`](../types/PackFormulaResult.md)  }[]

Sample inputs and outputs demonstrating usage of this formula.

#### Inherited from

Omit.examples

#### Defined in

[api_types.ts:297](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L297)

___

### extraOAuthScopes

• `Optional` `Readonly` **extraOAuthScopes**: `string`[]

OAuth scopes that the formula needs that weren't requested in the pack's overall authentication
config. For example, a Slack pack can have one formula that needs admin privileges, but non-admins
can use the bulk of the pack without those privileges. Coda will give users help in understanding
that they need additional authentication to use a formula with extra OAuth scopes. Note that
these scopes will always be requested in addition to the default scopes for the pack,
so an end user must have both sets of permissions.

#### Inherited from

Omit.extraOAuthScopes

#### Defined in

[api_types.ts:338](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L338)

___

### isAction

• `Optional` `Readonly` **isAction**: `boolean`

Does this formula take an action (vs retrieve data or make a calculation)?
Actions are presented as buttons in the Coda UI.

#### Inherited from

Omit.isAction

#### Defined in

[api_types.ts:303](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L303)

___

### isExperimental

• `Optional` `Readonly` **isExperimental**: `boolean`

If specified, the formula will not be suggested to users in Coda's formula autocomplete.
The formula can still be invoked by manually typing its full name.

#### Inherited from

Omit.isExperimental

#### Defined in

[api_types.ts:322](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L322)

___

### isSystem

• `Optional` `Readonly` **isSystem**: `boolean`

Whether this is a formula that will be used by Coda internally and not exposed directly to users.
Not for use by packs that are not authored by Coda.

#### Inherited from

Omit.isSystem

#### Defined in

[api_types.ts:328](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L328)

___

### name

• `Readonly` **name**: `string`

The name of the formula, used to invoke it.

#### Inherited from

Omit.name

#### Defined in

[api_types.ts:277](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L277)

___

### network

• `Optional` `Readonly` **network**: [`Network`](Network.md)

**`deprecated`** use `isAction` and `connectionRequirement` instead

#### Inherited from

Omit.network

#### Defined in

[api_types.ts:311](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L311)

___

### parameters

• `Readonly` **parameters**: `ParamsT`

The parameter inputs to the formula, if any.

#### Inherited from

Omit.parameters

#### Defined in

[api_types.ts:287](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L287)

___

### request

• **request**: [`RequestHandlerTemplate`](RequestHandlerTemplate.md)

A definition of the request and any parameter transformations to make in order to implement this formula.

#### Defined in

[api.ts:472](https://github.com/coda/packs-sdk/blob/main/api.ts#L472)

___

### varargParameters

• `Optional` `Readonly` **varargParameters**: [`ParamDefs`](../types/ParamDefs.md)

Variable argument parameters, used if this formula should accept arbitrary
numbers of inputs.

#### Inherited from

Omit.varargParameters

#### Defined in

[api_types.ts:292](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L292)
