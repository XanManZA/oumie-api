'use strict'

const Soundclip = use('Oumie/Models/Soundclip')
const _ = use('lodash')

class SoundclipRepository {
    async all({ reduce = {}, order = {}}) {
        let query = Soundclip.query();

        if (reduce.load && reduce.load.length)
            query.withMany(reduce.load);
        if (reduce.beneficiary_id)
            query.where('beneficiary_id', reduce.beneficiary_id);
        if (reduce.user_id)
            query.whereHas('beneficiary', q => {
                q.where('user_id', reduce.user_id);
            });
        if (order.field)
            query.orderBy(order.field, order.type);
   
        return await query.fetch();
    }

    async retrieveRandom() {
        let ids = await Soundclip.ids();
        
        return await Soundclip.find(_.sample(ids));
    }

    async create({ url, beneficiary_id }) {
        return await Soundclip.create({ url, beneficiary_id });
    }
}

module.exports = SoundclipRepository