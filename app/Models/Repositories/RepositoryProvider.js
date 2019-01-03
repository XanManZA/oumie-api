'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class RepositoryProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('Oumie/Models/UserRepository', () => {
			return new (require('./UserRepository'));
		});
		this.app.singleton('Oumie/Models/BeneficiaryRepository', () => {
			return new (require('./BeneficiaryRepository'));
		});
		this.app.singleton('Oumie/Models/SoundclipRepository', () => {
			return new (require('./SoundclipRepository'));
		});
	}

	boot () {
		
	}
}

module.exports = RepositoryProvider