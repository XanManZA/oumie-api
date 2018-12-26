'use strict'

const { formatters } = use('Validator')

class RegisterUser {
	get formatter () {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

	get rules () {
		return {
			mobile: 'required|number|unique:users,mobile',
			name: 'required|string|max:255',
			surname: 'required|string|max:255',
			password: 'required|min:8|confirmed'
		}
	}

	get sanitizationRules () {
		return {
			mobile: 'sanitize_mobile'
		}
	}
}

module.exports = RegisterUser
