import {AuthenticationType} from '../types';
import {FakeNpmProviderId} from './npm';
import {FakePackDefinition} from '../helpers/sample_utils';
import {FetchRequest} from '../api_types';
import {PackCategory} from '../types';
import {PackDefinition} from '../types';
import {PackMetadata} from '../compiled_types';
import {Type} from '../api_types';
import {fakeDefinitionToDefinition} from '../helpers/sample_utils';
import {fakeDefinitionToMetadata} from '../helpers/sample_utils';
import {makeGetConnectionNameFormula} from '../api';

export const FakeBggProviderId = 9010;

export const FakeBggPackId = 8002;
export const FakeBggPackVersion = '0.2.3';
export const FakeBggPackVersionOld = '0.2.2';

const FakeBggDefinitionOldFake: FakePackDefinition = {
  id: FakeBggPackId,
  name: 'BoardGameGeek',
  shortDescription: 'Gaming plugged',
  description: 'Gaming unplugged',
  version: FakeBggPackVersionOld,
  providerId: FakeBggProviderId,
  category: PackCategory.Fun,
  logoPath: 'some/path',
  formats: [
    {
      name: 'BoardGame',
      formulaNamespace: 'BGG',
      formulaName: 'BoardGame',
      matchers: [/https:\/\/boardgamegeek\.com\/boardgame\/(\d+)/],
    },
  ],
  formulas: {
    BGG: [
      {
        resultType: Type.string,
        name: 'BoardGame',
        description: 'Retrieve a board game.',
        examples: [],
        parameters: [
          {
            name: 'id',
            type: Type.string,
            description: 'ID of a board game.',
          },
        ],
        network: {hasSideEffect: false, hasConnection: true, requiresConnection: true},
        execute: async ([id], context) => {
          const url = `https://boardgamegeek.com/boardgame/${id}`;
          const result = await context.fetcher!.fetch({method: 'GET', url});
          return result.body;
        },
      },
    ],
  },
};

export const FakeBggDefinitionOld: PackDefinition = fakeDefinitionToDefinition(FakeBggDefinitionOldFake);
export const FakeBggMetadataOld: PackMetadata = fakeDefinitionToMetadata(FakeBggDefinitionOldFake);

const FakeBggDefinitionFake: FakePackDefinition = {
  id: FakeBggPackId,
  name: 'BoardGameGeek',
  shortDescription: 'Gaming plugged.',
  description: 'Gaming unplugged.',
  version: FakeBggPackVersion,
  providerId: FakeNpmProviderId,
  category: PackCategory.Fun,
  logoPath: 'some/path',
  defaultAuthentication: {
    type: AuthenticationType.OAuth2,
    authorizationUrl: 'https://boardgamegeek.com/oauth/authorize',
    tokenUrl: 'https://boardgamegeek.com/oauth/token',
    clientIdEnvVarName: 'FAKE_BGG_CLIENT_ID',
    clientSecretEnvVarName: 'FAKE_BGG_CLIENT_SECRET',
    scopes: ['games', 'favorites'],
    getConnectionNameFormula: makeGetConnectionNameFormula(async context => {
      const request: FetchRequest = {
        method: 'GET',
        url: 'https://boardgamegeek.com/me',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await context.fetcher!.fetch(request);
      return response.body.profile.display_name;
    }),
  },
  systemConnectionAuthentication: {
    type: AuthenticationType.QueryParamToken,
    paramName: 'apikey',
  },
  formats: [
    {
      name: 'BoardGame',
      formulaNamespace: 'BGG',
      formulaName: 'BoardGame',
      matchers: [/https:\/\/boardgamegeek\.com\/boardgame\/(\d+)/],
    },
  ],
  formulas: {
    BGG: [
      {
        resultType: Type.string,
        name: 'BoardGame',
        description: 'Retrieve a board game',
        examples: [],
        parameters: [
          {
            name: 'url',
            type: Type.string,
            description: 'Url to a board game',
          },
        ],
        network: {hasSideEffect: false, hasConnection: true, requiresConnection: true},
        execute: async ([id], context) => {
          const url = `https://boardgamegeek.com/boardgame/${id}`;
          const result = await context.fetcher!.fetch({method: 'GET', url});
          return result.body;
        },
      },
    ],
  },
};

export const FakeBggDefinition: PackDefinition = fakeDefinitionToDefinition(FakeBggDefinitionFake);
export const FakeBggMetadata: PackMetadata = fakeDefinitionToMetadata(FakeBggDefinitionFake);
