'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class BeneficiaryProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('Oumie/Core/SoundclipService', () => {
			return new (require('./SoundclipService'));
		})
	}

	boot () {
		
	}
}

module.exports = BeneficiaryProvider