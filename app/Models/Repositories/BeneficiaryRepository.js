'use strict'

const Beneficiary = use('Oumie/Models/Beneficiary')
const _ = use('lodash')

class BeneficiaryRepository {
    async all(reduce = {}) {
        let query = Beneficiary.query();

        if (reduce.user_id)
            query.where('user_id', reduce.user_id);

        return await query.fetch();
    }

    async retrieveRandom() {
        let ids = await Beneficiary.ids();
        return await Beneficiary.find(_.sample(ids));
    }

    async create({ name, mobile, user_id }) {
        return await Beneficiary.create({ name, mobile, user_id });
    }
}

module.exports = BeneficiaryRepository