'use strict'

const Logger = use('Logger')

class BeneficiaryController {
    constructor() {
        // protected
        this.beneficiaryService = use('Oumie/Core/BeneficiaryService');
    }

    async show({ params }) {
        return (await this.beneficiaryService.get(params.id)).toJSON();
    }

    async index({ auth }) {
        return (await this.beneficiaryService.all({
            user: auth.user
        })).toJSON();
    }
}

module.exports = BeneficiaryController
