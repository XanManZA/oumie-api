'use strict'

const Logger = use('Logger')
const User = use('Oumie/Models/User')

class BeneficiaryService {
    constructor() {
        // protected
        this.beneficiaries = use('Oumie/Models/BeneficiaryRepository');
    }

    async get(id) {
        return await User.find(id)
    }

    async all({ user = {} }) {
        return await this.beneficiaries.all({
            user_id: user.id
        });
    }

    async create(data) {
        Logger.info(`Creating new Beneficiary of User...`, {
            name: data.name,
            user: data.user_id
        });
        return await this.beneficiaries.create(data);
    }
}

module.exports = BeneficiaryService