---
title: "Identity"
---
# Interface: Identity

The runtime version of IdentityDefinition with a pack ID injected.

## Hierarchy

- [`IdentityDefinition`](IdentityDefinition.md)

  ↳ **`Identity`**

## Properties

### attribution

• `Optional` **attribution**: [`AttributionNode`](../types/AttributionNode.md)[]

Attribution text, images, and/or links that should be rendered along with this value.

See [makeAttributionNode](../functions/makeAttributionNode.md).

#### Inherited from

[IdentityDefinition](IdentityDefinition.md).[attribution](IdentityDefinition.md#attribution)

#### Defined in

[schema.ts:655](https://github.com/coda/packs-sdk/blob/main/schema.ts#L655)

___

### dynamicUrl

• `Optional` **dynamicUrl**: `string`

The dynamic URL, if this is a schema for a dynamic sync table. When returning a schema from the
[DynamicSyncTableOptions.getSchema](DynamicSyncTableOptions.md#getschema) formula of a dynamic sync table, you must include
the dynamic URL of that table, so that rows
in this table may be distinguished from rows in another dynamic instance of the same table.

When creating a reference to a dynamic sync table, you must include the dynamic URL of the table
you wish to reference, again to distinguish which table instance you are trying to reference.

#### Inherited from

[IdentityDefinition](IdentityDefinition.md).[dynamicUrl](IdentityDefinition.md#dynamicurl)

#### Defined in

[schema.ts:649](https://github.com/coda/packs-sdk/blob/main/schema.ts#L649)

___

### name

• **name**: `string`

The name of this entity. This is an arbitrary name but should be unique within your pack.
For example, if you are defining a schema that represents a user object, "User" would be a good identity name.

#### Inherited from

[IdentityDefinition](IdentityDefinition.md).[name](IdentityDefinition.md#name)

#### Defined in

[schema.ts:637](https://github.com/coda/packs-sdk/blob/main/schema.ts#L637)

___

### packId

• **packId**: `number`

The ID of another pack, if you are trying to reference a value from different pack.

#### Overrides

[IdentityDefinition](IdentityDefinition.md).[packId](IdentityDefinition.md#packid)

#### Defined in

[schema.ts:662](https://github.com/coda/packs-sdk/blob/main/schema.ts#L662)
