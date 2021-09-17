# Interface: PackVersionDefinition

The definition of the contents of a Pack at a specific version. This is the
heart of the implementation of a Pack.

## Hierarchy

- **`PackVersionDefinition`**

  ↳ [`PackDefinition`](PackDefinition.md)

## Properties

### defaultAuthentication

• `Optional` **defaultAuthentication**: [`Authentication`](../types/Authentication.md)

If specified, the user must provide personal authentication credentials before using the pack.

#### Defined in

[types.ts:683](https://github.com/coda/packs-sdk/blob/main/types.ts#L683)

___

### formats

• `Optional` **formats**: [`Format`](Format.md)[]

Definitions of this pack's column formats. See [Format](Format.md).

#### Defined in

[types.ts:717](https://github.com/coda/packs-sdk/blob/main/types.ts#L717)

___

### formulaNamespace

• `Optional` **formulaNamespace**: `string`

**`deprecated`**

#### Defined in

[types.ts:705](https://github.com/coda/packs-sdk/blob/main/types.ts#L705)

___

### formulas

<<<<<<< HEAD
• `Optional` **formulas**: (`BooleanPackFormula`<[`ParamDefs`](../types/ParamDefs.md)\> \| `NumericPackFormula`<[`ParamDefs`](../types/ParamDefs.md)\> \| `StringPackFormula`<[`ParamDefs`](../types/ParamDefs.md)\> \| `ObjectPackFormula`<[`ParamDefs`](../types/ParamDefs.md), [`ArraySchema`](ArraySchema.md)<[`Schema`](../types/Schema.md)\>\> \| `ObjectPackFormula`<[`ParamDefs`](../types/ParamDefs.md), [`Schema`](../types/Schema.md)\>)[]
=======
• `Optional` **formulas**: [`Formula`](../types/Formula.md)<[`ParamDefs`](../types/ParamDefs.md)\>[]
>>>>>>> de6ed9d2 (build after rebase)

Definitions of this pack's formulas. See [Formula](../types/Formula.md).

Note that button actions are also defined here. Buttons are simply formulas
with `isAction: true`.

#### Defined in

[types.ts:713](https://github.com/coda/packs-sdk/blob/main/types.ts#L713)

___

### networkDomains

• `Optional` **networkDomains**: `string`[]

Any domain(s) to which this pack makes fetcher requests. The domains this pack connects to must be
declared up front here, both to clearly communicate to users what a pack is capable of connecting to,
and for security reasons. These network domains are enforced at execution time: any fetcher request
to a domain not listed here will be rejected.

Only one network domain is allowed by default. If your pack has needs to connect to multiple domains
contact Coda support for approval.

#### Defined in

[types.ts:698](https://github.com/coda/packs-sdk/blob/main/types.ts#L698)

___

### syncTables

• `Optional` **syncTables**: `SyncTable`[]

Definitions of this pack's sync tables. See {@link SyncTable}.

#### Defined in

[types.ts:721](https://github.com/coda/packs-sdk/blob/main/types.ts#L721)

___

### systemConnectionAuthentication

• `Optional` **systemConnectionAuthentication**: [`SystemAuthentication`](../types/SystemAuthentication.md)

If specified, this pack requires system credentials to be set up via Coda's admin console in order to work when no
explicit connection is specified by the user.

#### Defined in

[types.ts:688](https://github.com/coda/packs-sdk/blob/main/types.ts#L688)

___

### version

• **version**: `string`

The semantic version of the pack. This must be valid semantic version of the form `1`, `1.2`, or `1.2.3`.
When uploading a pack version, the semantic version must be greater than any previously uploaded version.

#### Defined in

[types.ts:679](https://github.com/coda/packs-sdk/blob/main/types.ts#L679)
