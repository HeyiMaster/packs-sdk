---
title: "ImageAttributionNode"
---
# Interface: ImageAttributionNode

An attribution node that renders as a hyperlinked image.

This is often the logo of the data source along with a link back to the home page
of the data source or directly to the source data.

**`example`**
```
coda.makeAttributionNode({
  type: coda.AttributionNodeType.Image,
  anchorUrl: "https://example.com",
  imageUrl: "https://example.com/assets/logo.png",
});
```

## Properties

### anchorUrl

• **anchorUrl**: `string`

The URL to link to.

#### Defined in

[schema.ts:813](https://github.com/coda/packs-sdk/blob/main/schema.ts#L813)

___

### imageUrl

• **imageUrl**: `string`

The URL of the image to render.

#### Defined in

[schema.ts:815](https://github.com/coda/packs-sdk/blob/main/schema.ts#L815)

___

### type

• **type**: [`Image`](../enums/AttributionNodeType.md#image)

Identifies this as an image attribution node.

#### Defined in

[schema.ts:811](https://github.com/coda/packs-sdk/blob/main/schema.ts#L811)
