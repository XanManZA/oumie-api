'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Beneficiary extends Model {
    static get STATUS_ADDED() { return 0 }
    static get STATUS_VALIDATING() { return 1 }
    static get STATUS_ACTIVE() { return 2 }
    static get STATUS_INACTIVE() { return 3 }

    static get computed() {
        return ['readStatus']
    }

    getReadStatus({ status }) {
        switch(status) {
            case this.constructor.STATUS_ADDED:
                return 'Added';
            case this.constructor.STATUS_VALIDATING:
                return 'Validating';
            case this.constructor.STATUS_ACTIVE:
                return 'Active';
            case this.constructor.STATUS_INACTIVE:
                return 'Inactive';
        }
    }
}

module.exports = Beneficiary
