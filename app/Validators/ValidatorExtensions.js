'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()

class ValidatorExtensions extends ServiceProvider {
	async boot() {
		// We need them here as they are not registered yet when this file is loaded
		const { sanitizor } = use('Validator');
		const Validator = use('Validator')
		const Database = use('Database')

		// Sanitizors
		sanitizor.sanitizeMobile = (value, options) => {
			if (!Number(value))
				return value;
				
			let number = phoneUtil.parseAndKeepRawInput(value, 'ZA');
			if (!value || !number)
				return '';

			return number.getCountryCode().toString() + number.getNationalNumber().toString();
		};

		// Rules
		const exists = async (data, field, message, args, get) => {
			const value = get(data, field)
			if (!value) {
				/**
				 * skip validation if value is not defined. `required` rule
				 * should take care of it.
				 */
				return
			}

			if (!message) {
				message = `'${value}' must exist in '${table}' on '${column}'`;
			}
		  
			const [table, column] = args
			const row = await Database.table(table).where(column, value).first()
		  
			if (!row) {
				throw message
			}
		}

		Validator.extend('exists', exists)
	}
}

module.exports = ValidatorExtensions