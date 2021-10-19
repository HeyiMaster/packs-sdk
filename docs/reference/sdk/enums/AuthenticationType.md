# Enumeration: AuthenticationType

Authentication types supported by Coda Packs.

## Enumeration members

### CodaApiHeaderBearerToken

• **CodaApiHeaderBearerToken** = `"CodaApiHeaderBearerToken"`

Authenticate using a Coda REST API token, sent as an HTTP header.

This is identical to [HeaderBearerToken](AuthenticationType.md#headerbearertoken) except the user wil be presented
with a UI to generate an API token rather than needing to paste an arbitrary API
token into a text input.

This is primarily for use by Coda-authored packs, as it is only relevant for interacting with the
Coda REST API.

#### Defined in

[types.ts:101](https://github.com/coda/packs-sdk/blob/main/types.ts#L101)

___

### CustomHeaderToken

• **CustomHeaderToken** = `"CustomHeaderToken"`

Authenticate using an HTTP header with a custom name and token prefix that you specify.
The header name is defined in the {@link headerName} property.

#### Defined in

[types.ts:52](https://github.com/coda/packs-sdk/blob/main/types.ts#L52)

___

### HeaderBearerToken

• **HeaderBearerToken** = `"HeaderBearerToken"`

Authenticate using an HTTP header of the form `Authorization: Bearer <token>`.

#### Defined in

[types.ts:47](https://github.com/coda/packs-sdk/blob/main/types.ts#L47)

___

### MultiQueryParamToken

• **MultiQueryParamToken** = `"MultiQueryParamToken"`

Authenticate using multiple tokens, each passed as a different URL parameter, e.g.
https://example.com/api?param1=token1&param2=token2

The parameter names are defined in the [params](../interfaces/ExternalPackVersionMetadata.md#params) array property.

#### Defined in

[types.ts:66](https://github.com/coda/packs-sdk/blob/main/types.ts#L66)

___

### None

• **None** = `"None"`

Indicates this pack does not use authentication. You may also omit an authentication declaration entirely.

#### Defined in

[types.ts:43](https://github.com/coda/packs-sdk/blob/main/types.ts#L43)

___

### OAuth2

• **OAuth2** = `"OAuth2"`

Authenticate using OAuth2. You must specify the authorization URL, token exchange URL, and
scopes here as part of the pack definition. You'll provide the application's client ID and
client secret in the pack management UI, so that these can be stored securely.

The API must use a (largely) standards-compliant implementation of OAuth2.

#### Defined in

[types.ts:74](https://github.com/coda/packs-sdk/blob/main/types.ts#L74)

___

### QueryParamToken

• **QueryParamToken** = `"QueryParamToken"`

Authenticate using a token that is passed as a URL parameter with each request, e.g.
https://example.com/api?paramName=token

The parameter name is defined in the {@link paramName} property.

#### Defined in

[types.ts:59](https://github.com/coda/packs-sdk/blob/main/types.ts#L59)

___

### WebBasic

• **WebBasic** = `"WebBasic"`

Authenticate using HTTP Basic authorization. The user provides a username and password
(sometimes optional) which are included as an HTTP header according to the Basic auth standard.

See https://en.wikipedia.org/wiki/Basic_access_authentication

#### Defined in

[types.ts:81](https://github.com/coda/packs-sdk/blob/main/types.ts#L81)