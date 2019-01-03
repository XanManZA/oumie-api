'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Soundclip extends Model {
	static get STATUS_RECORDED() { return 0 }
    static get STATUS_SENT() { return 1 }
    static get STATUS_DELIVERED() { return 2 }
    static get STATUS_INVALID() { return 3 }

    static get computed() {
        return ['readStatus']
	}
	
	getReadStatus({ status }) {
        switch(status) {
            case this.constructor.STATUS_RECORDED:
                return 'Recorded';
            case this.constructor.STATUS_SENT:
                return 'Sent';
            case this.constructor.STATUS_DELIVERED:
                return 'Delivered';
            case this.constructor.STATUS_INVALID:
                return 'Invalid';
        }
    }

    /**
	 * Beneficiary relationship
	 *
	 * @method beneficiary
	 *
	 * @return {Object}
	 */
	beneficiary() {
		return this.belongsTo('Oumie/Models/Beneficiary');
	}
}

module.exports = Soundclip
