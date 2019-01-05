'use strict'

const Soundclip = use('Oumie/Models/Soundclip')
const Storage = use('Oumie/Storage')
const Helpers = use('Helpers')
const Logger = use('Logger')

class SoundclipService {
    constructor() {
        // protected
        this.soundclips = use('Oumie/Models/SoundclipRepository');
    }

    /**
     * Gets the audio buffer for a Soundclip
     *
     * @method play
     *
     * @param  {Integer} id
     * @return {Buffer}
     */
    async play(id) {
        let clip = await Soundclip.find(id);

        return await Storage.download(clip.url);
    }

    async get(id) {
        return await Soundclip.find(id)
    }

    async all(data) {
        return await this.soundclips.all(data);
    }

    async create(data) {
        let name = '';
        let soundclip = data.soundclip;

        if (!soundclip)
            throw new Error('Soundclip file needs to be included on Soundclip create using `soundclip` property on param object.');
        if (!data.beneficiary_id)
            throw new Error('`beneficiary_id` propert needs to be specified on param object to save unique file name.');

        name = `soundclips/` + Date.now() + `_${data.beneficiary_id}.m4a`;
        await Storage.upload(soundclip.tmpPath, name);
        data.url = name;

        return await this.soundclips.create(data);
    }
}

module.exports = SoundclipService