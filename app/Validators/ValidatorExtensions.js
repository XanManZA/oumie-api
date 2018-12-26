'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()

class ValidatorExtensions extends ServiceProvider {
	async boot() {
		const { sanitizor } = use('Validator');

		sanitizor.sanitizeMobile = (value, options) => {
			let number = phoneUtil.parseAndKeepRawInput(value, 'ZA');
			if (!value || !number)
				return '';

			return number.getCountryCode().toString() + number.getNationalNumber().toString();
		};
	}
}

module.exports = ValidatorExtensions