'use strict'

const Logger = use('Logger')

class AuthController {
    constructor() {
        // protected
        this.userService = use('Oumie/Core/UserService');
    }

    async login({ request, auth }) {
        let { mobile, password } = request.all();

        Logger.info(`logging in...`, {
            user: mobile
        });
        return await auth.withRefreshToken().attempt(mobile, password);
    }

    async register({ request, auth }) {
        let user = await this.userService.create(request.all());

        return await auth.withRefreshToken().generate(user);
    }

    self({ auth }) {
        return auth.user;
    }
}

module.exports = AuthController
