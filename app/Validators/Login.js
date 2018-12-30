'use strict'

const { formatters } = use('Validator')

class Login {
	get formatter () {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

	get rules () {
		return {
			mobile: 'required|number',
			password: 'required'
		}
	}

	get sanitizationRules () {
		return {
			mobile: 'sanitize_mobile'
		}
	}
}

module.exports = Login
