<<<<<<< HEAD
# Type alias: PackVersionMetadata

=======
>>>>>>> de6ed9d2 (build after rebase)
Ƭ **PackVersionMetadata**: `Omit`<[`PackVersionDefinition`](../interfaces/PackVersionDefinition.md), ``"formulas"`` \| ``"formats"`` \| ``"defaultAuthentication"`` \| ``"syncTables"``\> & { `defaultAuthentication?`: `AuthenticationMetadata` ; `formats`: [`PackFormatMetadata`](../interfaces/PackFormatMetadata.md)[] ; `formulas`: [`PackFormulaMetadata`](PackFormulaMetadata.md)[] ; `syncTables`: [`PackSyncTable`](PackSyncTable.md)[]  }

Stripped-down version of `PackVersionDefinition` that doesn't contain formula definitions.

#### Defined in

[compiled_types.ts:44](https://github.com/coda/packs-sdk/blob/main/compiled_types.ts#L44)
