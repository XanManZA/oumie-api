'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class BeneficiaryProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('Oumie/Core/BeneficiaryService', () => {
			return new (require('./BeneficiaryService'));
		})
	}

	boot () {
		
	}
}

module.exports = BeneficiaryProvider