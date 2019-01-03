'use strict'

class BeneficiaryController {
    constructor() {
        // protected
        this.beneficiaryService = use('Oumie/Core/BeneficiaryService');
    }

    async show({ params }) {
        let beneficiary = await this.beneficiaryService.get(params.id);

        return {
            ...(beneficiary.toJSON()),
            mobile: beneficiary.mobile
        }
    }

    async index({ auth }) {
        return (await this.beneficiaryService.all({
            user: auth.user
        })).toJSON();
    }
}

module.exports = BeneficiaryController
