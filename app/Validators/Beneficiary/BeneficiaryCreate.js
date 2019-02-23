'use strict'

const { formatters } = use('Validator')

class BeneficiaryCreate {
	get formatter () {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

	get rules () {
		return {
            mobile: 'required|number',
			name: 'required|string|max:255'
		}
	}

	get sanitizationRules () {
		return {
			mobile: 'sanitize_mobile'
		}
	}
}

module.exports = BeneficiaryCreate
