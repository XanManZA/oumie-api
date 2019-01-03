'use strict'

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

    async index({ request, auth }) {
        return (await this.soundclipService.all({
            beneficiary_id: request.get().beneficiary_id,
            user: auth.user,
            load: request.get().load
        })).toJSON();
    }
}

module.exports = SoundclipController
