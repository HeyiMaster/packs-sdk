---
title: "ParamDef"
---
# Interface: ParamDef<T\>

The definition of a formula parameter.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `UnionType` |

## Properties

### autocomplete

• `Optional` **autocomplete**: [`MetadataFormula`](../types/MetadataFormula.md)

A [MetadataFormula](../types/MetadataFormula.md) that returns valid values for this parameter, optionally matching a search
query. This can be useful both if there are a fixed number of valid values for the parameter,
or if the valid values from the parameter can be looked up from some API.
Use [makeMetadataFormula](../functions/makeMetadataFormula.md) to wrap a function that implements your autocomplete logic.
Typically once you have fetched the list of matching values, you'll use
[autocompleteSearchObjects](../functions/autocompleteSearchObjects.md) to handle searching over those values.
If you have a hardcoded list of valid values, you would only need to use
[makeSimpleAutocompleteMetadataFormula](../functions/makeSimpleAutocompleteMetadataFormula.md).

#### Defined in

[api_types.ts:229](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L229)

___

### defaultValue

• `Optional` **defaultValue**: [`DefaultValueType`](../types/DefaultValueType.md)<`T`\>

The default value to be used for this parameter if it is not specified by the user.

#### Defined in

[api_types.ts:233](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L233)

___

### description

• **description**: `string`

A brief description of what this parameter is used for, shown to the user when invoking the formula.

#### Defined in

[api_types.ts:211](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L211)

___

### name

• **name**: `string`

The name of the parameter, which will be shown to the user when invoking this formula.

#### Defined in

[api_types.ts:203](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L203)

___

### optional

• `Optional` **optional**: `boolean`

Whether this parameter can be omitted when invoking the formula.
All optional parameters must come after all non-optional parameters.

#### Defined in

[api_types.ts:216](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L216)

___

### type

• **type**: `T`

The data type of this parameter (string, number, etc).

#### Defined in

[api_types.ts:207](https://github.com/coda/packs-sdk/blob/main/api_types.ts#L207)
