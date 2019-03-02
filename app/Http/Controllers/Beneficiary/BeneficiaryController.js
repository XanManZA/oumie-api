'use strict'

const Logger = use('Logger')

class BeneficiaryController {
    constructor() {
        // protected
        this.beneficiaryService = use('Oumie/Core/BeneficiaryService');
    }

    async store({ request, auth }) {
        let beneficiary = (await this.beneficiaryService.create({
            ...(request.all()),
            user_id: auth.user.id
        }));
        await beneficiary.reload(); // So our computed props are loaded

        return beneficiary;
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
