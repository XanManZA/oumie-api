'use strict'

const Soundclip = use('Oumie/Models/Soundclip')

class SoundclipService {
    constructor() {
        // protected
        this.soundclips = use('Oumie/Models/SoundclipRepository');
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

    // async create(data) {
    //     Logger.info(`Creating new Beneficiary of User...`, {
    //         name: data.name,
    //         user: data.user_id
    //     });
    //     return await this.soundclips.create(data);
    // }
}

module.exports = SoundclipService