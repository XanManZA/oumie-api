'use strict'

const Logger = use('Logger')

class GoogleStorage {
    constructor({ config }) {
        this.config = config;
        this.client = use('@google-cloud/storage')();
    }

    /**
     * Get the @google-lib storage bucket
     *
     * @method
     *
     * @return {Object}
     */
    storage() {
        return this.client.bucket(this.config.get(`services.google.storage.bucket`));
    }

    /**
     * Store a file
     *
     * @method
     * 
     * @param  {Object} file
     * @param  {String} ref
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