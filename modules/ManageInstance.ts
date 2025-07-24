import axios from "axios";

/**
 * Class to manage API instances, providing functionality for health checks,
 * key management, deployment, and knowledge base (KB) operations.
 */
export class ManageInstance {
    private readonly headers: object;
    private readonly baseUrl: string;

    /**
     * Initializes the ManageInstance class.
     * 
     * @param {object} headers - HTTP headers to include in API requests.
     */
    constructor(headers: object) {
        this.headers = headers;
        this.baseUrl = "https://ima.kai-studio.ai";
    }

    /**
     * Generates a new API key.
     * 
     * @returns {Promise<boolean>} True if the key is successfully generated.
     */
    public async generateNewApiKey(): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/generate-new-apikey`,
                method: 'POST',
                headers: this.headers
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Updates the instance name.
     * 
     * @param {string} name - New name for the instance.
     * @returns {Promise<boolean>} True if the name update is successful.
     */
    public async updateName(name: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/update-name`,
                method: 'POST',
                headers: this.headers,
                data: { name }
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Deploys the instance.
     * 
     * @returns {Promise<boolean>} True if deployment is successful.
     */
    public async deploy(): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/deploy`,
                method: 'POST',
                headers: this.headers
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Deletes the instance.
     * 
     * @returns {Promise<boolean>} True if deletion is successful.
     */
    public async delete(): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/delete`,
                method: 'POST',
                headers: this.headers
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Adds a new knowledge base (KB) entry.
     * 
     * @param {string} type - Type of knowledge base entry.
     * @param {any} options - Additional options for the KB entry.
     * @param {any} searchGoal - Search goal associated with the KB entry.
     * @returns {Promise<boolean>} True if KB addition is successful.
     */
    public async addKb(type: string, options: any, searchGoal: any): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/add-kb`,
                method: 'POST',
                headers: this.headers,
                data: { type, options, searchGoal }
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Sets the playground configuration.
     * 
     * @param {string[]} typeList - List of KB types to configure for the playground.
     * @returns {Promise<boolean>} True if configuration is successful.
     */
    public async setPlayground(typeList: string[]): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/set-playground`,
                method: 'POST',
                headers: this.headers,
                data: { typeList }
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Updates an existing knowledge base (KB) entry.
     * 
     * @param {string} id - ID of the KB entry to update.
     * @param {any} options - Updated options for the KB entry.
     * @param {any} searchGoal - Updated search goal for the KB entry.
     * @returns {Promise<boolean>} True if KB update is successful.
     */
    public async updateKb(id: string, options: any, searchGoal: any): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/update-kb`,
                method: 'POST',
                headers: this.headers,
                data: { id, options, searchGoal }
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Removes a knowledge base (KB) entry.
     * 
     * @param {string} id - ID of the KB entry to remove.
     * @returns {Promise<boolean>} True if KB removal is successful.
     */
    public async removeKb(id: string): Promise<boolean> {
        try {
            const request = await axios({
                url: `${this.baseUrl}/remove-kb`,
                method: 'POST',
                headers: this.headers,
                data: { id }
            });
            return request.data.response;
        } catch (e) {
            throw e;
        }
    }
}
