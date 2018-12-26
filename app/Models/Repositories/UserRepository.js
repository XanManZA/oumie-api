'use strict'

const User = use('Oumie/Models/User')
const _ = use('lodash')

class UserRepository {
    async retrieveRandom() {
        let ids = await User.ids();
        return await User.find(_.sample(ids));
    }

    async create({ name, surname, email, password } ) {
        return await User.create({ name, surname, email, password });
    }
}

module.exports = UserRepository