'use strict'

Logger = use('Logger')

class SoundclipController {
    constructor() {
        // protected
        this.soundclipService = use('Oumie/Core/SoundclipService');
    }

    // async show({ params }) {
    //     let beneficiary = await this.beneficiaryService.get(params.id);

    //     return {
    //         ...(beneficiary.toJSON()),
    //         mobile: beneficiary.mobile
    //     }
    // }

    async create({ request, auth }) {
        Logger.info(`User loading Soundclip...`, {
            beneficiary: data.request.beneficiary_id,
            user: auth.user.id
        });
    }

    async play({ params }) {
        return await this.soundclipService.play(params.id);
    }

    async index({ request, auth }) {
        return (await this.soundclipService.all({
            beneficiary_id: request.get().beneficiary_id,
            user: auth.user,
            load: request.get().load
        })).toJSON();
    }
}

module.exports = SoundclipController
