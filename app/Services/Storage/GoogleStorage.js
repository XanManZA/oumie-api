'use strict'

const Logger = use('Logger')
const Helpers = use('Helpers')

class GoogleStorage {
    constructor({ config }) {
        this.config = config;
        this.client = use('@google-cloud/storage')();
    }

    /**
     * Get the @google-lib storage bucket
     *
     * @method storage
     *
     * @return {Object}
     */
    storage() {
        return this.client.bucket(this.config.get(`services.google.storage.bucket`));
    }

    /**
     * Download a file
     *
     * @method download
     * 
     * @param  {String} name
     *
     * @return {Buffer}
     */
    async download(name) {
        let response = {};

        try {
            response = await this.storage().file(name).download();
            Logger.info(`file downloaded.`);
        } catch(error) {
            Logger.error(error);
        }
        
        return response[0];
    }

    /**
     * Store a file
     *
     * @method upload
     * 
     * @param  {Object} file
     * @param  {String} name
     *
     * @return {string}
     */
    async upload(file, name) {
        let response = {};

        try {
            response = await this.storage().upload(file, { destination: name });
            Logger.info(`file uploaded.`);
        } catch(error) {
            Logger.error(error);
        }
        
        return response;
    }
}

module.exports = GoogleStorage