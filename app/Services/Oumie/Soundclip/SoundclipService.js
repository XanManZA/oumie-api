'use strict'

const Soundclip = use('Oumie/Models/Soundclip')
const Storage = use('Oumie/Storage')

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

    async all({ beneficiary_id = null, user = {}, load = [] }) {
        return await this.soundclips.all({
            beneficiary_id,
            user_id: user.id,
            load
        });
    }

    async create(data) {
        return await this.soundclips.create(data);
    }
}

module.exports = SoundclipService