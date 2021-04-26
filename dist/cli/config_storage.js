"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackId = exports.storePackId = exports.storeCodaApiKey = exports.getApiKey = exports.PACK_ID_FILE_NAME = exports.DEFAULT_API_ENDPOINT = void 0;
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const helpers_1 = require("../testing/helpers");
const url_parse_1 = __importDefault(require("url-parse"));
const helpers_2 = require("../testing/helpers");
exports.DEFAULT_API_ENDPOINT = 'https://coda.io';
const API_KEY_FILE_NAME = '.coda.json';
exports.PACK_ID_FILE_NAME = '.coda-pack.json';
function isDefaultApiEndpoint(apiEndpoint) {
    return apiEndpoint === exports.DEFAULT_API_ENDPOINT;
}
function getApiKey(codaApiEndpoint) {
    var _a;
    const baseFilename = path.join(process.env.PWD || '.', API_KEY_FILE_NAME);
    // Traverse up from the current directory for a while to see if we can find an API key file.
    // Usually it will be in the current directory, but if the user has cd'ed deeper into their
    // project it may be higher up.
    for (let i = 0; i < 10; i++) {
        const filename = path.join(`..${path.sep}`.repeat(i), baseFilename);
        const apiKeyFile = readApiKeyFile(filename);
        if (apiKeyFile) {
            if (isDefaultApiEndpoint(codaApiEndpoint)) {
                return apiKeyFile.apiKey;
            }
            else {
                const { host } = url_parse_1.default(codaApiEndpoint);
                return (_a = apiKeyFile.environmentApiKeys) === null || _a === void 0 ? void 0 : _a[host];
            }
        }
    }
}
exports.getApiKey = getApiKey;
function storeCodaApiKey(apiKey, projectDir = '.', codaApiEndpoint) {
    const filename = path.join(projectDir, API_KEY_FILE_NAME);
    const apiKeyFile = readApiKeyFile(filename) || { apiKey: '' };
    if (isDefaultApiEndpoint(codaApiEndpoint)) {
        apiKeyFile.apiKey = apiKey;
    }
    else {
        apiKeyFile.environmentApiKeys = apiKeyFile.environmentApiKeys || {};
        const { host } = url_parse_1.default(codaApiEndpoint);
        apiKeyFile.environmentApiKeys[host] = apiKey;
    }
    writeApiKeyFile(filename, apiKeyFile);
}
exports.storeCodaApiKey = storeCodaApiKey;
function readApiKeyFile(filename) {
    return helpers_1.readJSONFile(filename);
}
function writeApiKeyFile(filename, fileContents) {
    const fileExisted = fs_1.default.existsSync(filename);
    helpers_2.writeJSONFile(filename, fileContents);
    if (!fileExisted) {
        // When we create the file, make sure only the owner can read it, because it contains sensitive credentials.
        fs_1.default.chmodSync(filename, 0o600);
    }
}
function storePackId(manifestDir, packId, codaApiEndpoint) {
    const fileContents = readPackIdFile(manifestDir) || { packId: -1 };
    if (isDefaultApiEndpoint(codaApiEndpoint)) {
        fileContents.packId = packId;
    }
    else {
        const { host } = url_parse_1.default(codaApiEndpoint);
        fileContents.environmentPackIds = fileContents.environmentPackIds || {};
        fileContents.environmentPackIds[host] = packId;
    }
    writePacksFile(manifestDir, fileContents);
}
exports.storePackId = storePackId;
function getPackId(manifestDir, codaApiEndpoint) {
    var _a;
    const fileContents = readPackIdFile(manifestDir);
    if (!fileContents) {
        return;
    }
    if (isDefaultApiEndpoint(codaApiEndpoint)) {
        return fileContents.packId;
    }
    else {
        const { host } = url_parse_1.default(codaApiEndpoint);
        return (_a = fileContents.environmentPackIds) === null || _a === void 0 ? void 0 : _a[host];
    }
}
exports.getPackId = getPackId;
function readPackIdFile(manifestDir) {
    const filename = path.join(manifestDir, exports.PACK_ID_FILE_NAME);
    return helpers_1.readJSONFile(filename);
}
function writePacksFile(manifestDir, fileContents) {
    const filename = path.join(manifestDir, exports.PACK_ID_FILE_NAME);
    helpers_2.writeJSONFile(filename, fileContents);
}