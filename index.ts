import {FileInstance} from "./modules/FileInstance";
import {ManageInstance} from "./modules/ManageInstance";

export interface KaiStudioCredentials {
    organizationId?: any,
    instanceId?: any,
    apiKey?: any,
    host?: any
}

export class KaiStudio {

    private readonly credentials: KaiStudioCredentials;
    private readonly _fileInstance: FileInstance;
    private readonly _manageInstance: ManageInstance;

    constructor(credentials: KaiStudioCredentials) {
        this.credentials = credentials
        let headers = {}, baseUrl = ''

        if (this.credentials.instanceId && this.credentials.apiKey) {
            headers = {
                'organization-id': this.credentials.organizationId,
                'instance-id': this.credentials.instanceId,
                'api-key': this.credentials.apiKey
            }

            baseUrl = `https://api.kai-studio.ai/`
        }

        if (this.credentials.host) {
            baseUrl = this.credentials.host
            if (this.credentials.apiKey) {
                headers = {
                    'api-key': this.credentials.apiKey
                }
            }
        }


        this._manageInstance = new ManageInstance(headers)
        this._fileInstance = new FileInstance(headers)
    }

    public getCredentials(): KaiStudioCredentials {
        return this.credentials
    }

    public fileInstance(): FileInstance {
        return this._fileInstance
    }

    public manageInstance(): ManageInstance {
        return this._manageInstance
    }

}

