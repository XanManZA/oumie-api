'use strict'

const Nexmo = use('nexmo');
const Promise = use('bluebird');

class NexmoVoice {
    constructor({ config }) {
        this.voiceName = 'Russel';
        this.ncco = [];
        this.config = config;
        this.client = Promise.promisifyAll(new Nexmo({
            apiKey: this.config.get(`services.nexmo.apiKey`),
            apiSecret: this.config.get(`services.nexmo.apiSecret`),
            applicationId: this.config.get(`services.nexmo.applicationID`),
            privateKey: this.config.get(`services.nexmo.privateKey`)
        }).calls);
    }

    addFilestreamStep({ url }) {
        this.ncco.push({
            action: 'stream',
            streamUrl: [url],
            loop: 2
        });

        return this;
    }

    addTextVoiceStep({ text }) {
        this.ncco.push({
            action: 'talk',
            text,
            voiceName: this.voiceName,
            loop: 1
        });

        return this;
    }

    /**
     * Make a call to a number
     *
     * @method call
     * 
     * @param  {Object} number
     * @param  {Function} callback
     *
     * @return {Object}
     */
    async call({ number }, callback) {
        let callData = {
            to: [{
                type: 'phone',
                number
            }],
            from: {
                type: 'phone',
                number: this.config.get('services.nexmo.number')
            }
        };

        if (this.ncco.length)
            callData.ncco = this.ncco;
        else
            callData.answer_url = [this.config.get('services.nexmo.answerUrl')];

        return await this.client.createAsync(callData, callback);
    }
}

module.exports = NexmoVoice