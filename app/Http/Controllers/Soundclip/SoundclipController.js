'use strict'

const Logger = use('Logger')

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

    async store({ request, auth }) {
        Logger.info(`User loading Soundclip...`, {
            beneficiary: request.input('beneficiary_id'),
            user: auth.user.id
        });
        return (await this.soundclipService.create({
            soundclip:  request.file('soundclip'),
            ...request.all()
        })).toJSON();
    }

    async play({ params }) {
        return await this.soundclipService.play(params.id);
    }

    async index({ request, auth }) {
        return (await this.soundclipService.all({
            reduce: {
                beneficiary_id: request.get().beneficiary_id,
                user: auth.user,
                load: request.get().load
            },
            order: {
                field: 'created_at',
                type: 'desc'
            }
        })).toJSON();
    }
}

module.exports = SoundclipController
