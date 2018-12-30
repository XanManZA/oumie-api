'use strict'

class AuthController {
    constructor() {
        // protected
        this.userService = use('Oumie/Core/UserService');
    }

    async login({ request, auth }) {
        let { mobile, password } = request.all();

        return await auth.withRefreshToken().attempt(mobile, password);
    }

    async register({ request, auth }) {
        let user = await this.userService.create(request.all());

        return {
            ...user.toJSON(),
            mobile: user.mobile
        };
    }

    self({ auth }) {
        return {
            ...auth.user.toJSON(),
            mobile: auth.user.mobile
        };
    }
}

module.exports = AuthController
