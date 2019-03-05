'use strict'

const Logger = use('Logger')
const Helpers = use('Helpers')
const Nexmo = use('nexmo');

class NexmoVoice {
    constructor({ config }) {
        this.config = config;
        this.client = new Nexmo({
            apiKey: this.config.get(`services.nexmo.apiKey`),
            apiSecret: this.config.get(`services.nexmo.apiSecret`),
            applicationId: this.config.get(`services.nexmo.applicationID`),
            privateKey: this.config.get(`services.nexmo.privateKey`)
        });
    }

    /**
     * Make a call to a number
     *
     * @method call
     * 
     * @param  {Object} file
     *
     * @return {Object}
     */
    call() {
        return this.client.bucket(this.config.get(`services.google.storage.bucket`));
    }
}

module.exports = NexmoVoice