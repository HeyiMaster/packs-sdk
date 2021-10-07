import type { Arguments } from 'yargs';
interface CreateArgs {
    manifestFile: string;
    codaApiEndpoint: string;
    name?: string;
    description?: string;
    workspace?: string;
}
export declare function handleCreate({ manifestFile, codaApiEndpoint, name, description, workspace, }: Arguments<CreateArgs>): Promise<void>;
export declare function createPack(manifestFile: string, codaApiEndpoint: string, { name, description, workspace }: {
    name?: string;
    description?: string;
    workspace?: string;
}): Promise<never>;
export {};