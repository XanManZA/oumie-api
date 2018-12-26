'use strict'

const Logger = use('Logger')

class UserService {
    constructor() {
        // protected
        this.users = use('Oumie/Models/UserRepository');
    }

    async getRandom() {
        return await this.users.retrieveRandom();
    }

    async create(data) {
        Logger.info(`Creating new User ${data.email}...`);
        return await this.users.create(data);
    }
}

module.exports = UserService