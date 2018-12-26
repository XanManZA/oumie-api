'use strict'

const User = use('Oumie/Models/User')
const _ = use('lodash')

class UserRepository {
    async retrieveRandom() {
        let users = await User.all();

        return _.sample(users.toJSON());
    }

    async create(data) {
        let { name, surname, email, password } = data;

        return await User.create({ name, surname, email, password });
    }
}

module.exports = UserRepository