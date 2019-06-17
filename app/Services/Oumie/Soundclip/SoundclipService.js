'use strict'

const Soundclip = use('Oumie/Models/Soundclip')
const Storage = use('Oumie/Storage')
const Env = use('Env')
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

    async create({ soundclip, beneficiary_id, soundclipStream }) {
        let name = '';

        if (!soundclip && !soundclipStream)
            throw new Error('Soundclip file needs to be included on Soundclip create using `soundclip` or `soundclipStream` property on param object.');
        if (!beneficiary_id)
            throw new Error('`beneficiary_id` property needs to be specified on param object to save unique file name.');
        
        name = `soundclips/` + Date.now() + `_${beneficiary_id}.wav`;
        await Storage.upload({
            file: soundclip.tmpPath,
            name,
            type: 'audio/wav'
        });

        // return await this.soundclips.create({
        //     soundclip,
        //     beneficiary_id,
        //     url: name,
        // });
    }
}

module.exports = SoundclipService