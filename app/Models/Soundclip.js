'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Soundclip extends Model {
    /**
	 * User relationship
	 *
	 * @method user
	 *
	 * @return {Object}
	 */
	user() {
		return this.belongsTo('Oumie/Models/User');
	}
}

module.exports = Soundclip
