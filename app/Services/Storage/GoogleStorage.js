'use strict'

const Logger = use('Logger')
const { DateTime } = use('luxon')
const TimingUtil = use('Oumie/Utils/TimingUtil')
const Env = use('Env')

class GoogleStorage {
    static get SIGN_TIMEOUT() {
        return 15;
    }

    constructor({ config }) {
        this.config = config;
        this.client = use('@google-cloud/storage')();
        this.storageUrl = 'https://storage.googleapis.com';
        this.signOptions = { action: 'read' };
        this.streamOptions = { resumable: false }
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
     * Stream a file to storage
     *
     * @method publish
     * 
     * @param  {String} url
     * @param  {String} type
     *
     * @return {String}
     */
    async stream({ buffer, name, type }) {
        try {
            let stream = this.storage()
                            .file(`${Env.get('NODE_ENV')}/${name}`)
                            .createWriteStream({
                                ...this.streamOptions,
                                contentType: type,
                                metadata: {
                                    cacheControl: 'public, max-age=31536000' 
                                }
                            });
            stream.on('error', err => {
                Logger.error(err);
            });
            await stream.end(buffer);
            Logger.info(`file streamed to storage.`);
            
            return `${this.storageUrl}/${file.bucket.name}/${file.name}`;
        } catch(error) {
            Logger.error(error);
        }
    }

    /**
     * Make a file public temporarily
     *
     * @method publish
     * 
     * @param  {String} url
     * @param  {Number} timeout
     *
     * @return {String}
     */
    async publish({ url, timeout }) {
        try {
            let delay = DateTime.local().plus({ minutes: timeout }).diff(DateTime.local()).milliseconds;
            let file = await this.storage().file(`${Env.get('NODE_ENV')}/${url}`);
            await file.makePublic();
            
            TimingUtil.delay(delay, () => {
                file.makePrivate();
                Logger.info(`file made private again.`);
            });
            Logger.info(`file temporarily made public.`);
            
            return `${this.storageUrl}/${file.bucket.name}/${file.name}`;
        } catch(error) {
            Logger.error(error);
        }
    }

    /**
     * Get a temporary signed URL for a file
     *
     * @method sign
     * 
     * @param  {String} url
     * @param  {String} type
     *
     * @return {String}
     */
    async sign({ url, type }) {
        try {
            let response =  await this.storage()
                                    .file(`${Env.get('NODE_ENV')}/${url}`)
                                    .getSignedUrl({
                                        ...this.signOptions,
                                        expires: DateTime.local().plus({ minutes: this.constructor.SIGN_TIMEOUT }).toMillis(),
                                        contentType: type
                                    });
            Logger.info(`signed url generated for storage file.`);

            return response[0];
        } catch(error) {
            Logger.error(error);
        }
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
            response = await this.storage().file(`${Env.get('NODE_ENV')}/${name}`).download();
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
    async upload({ file, name }) {
        let response = {};

        try {
            response = await this.storage().upload(file, {
                destination: `${Env.get('NODE_ENV')}/${name}`,
                metadata: {
                    contentType: 'audio/wav',
                    cacheControl: 'public, max-age=31536000' 
                }
            });
            Logger.info(`file uploaded.`);
        } catch(error) {
            Logger.error(error);
        }
        
        return response;
    }
}

module.exports = GoogleStorage