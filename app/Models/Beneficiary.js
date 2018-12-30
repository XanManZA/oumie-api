'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Beneficiary extends Model {
    static get STATUS_ADDED() { return 0 }
    static get STATUS_VALIDATING() { return 1 }
    static get STATUS_ACTIVE() { return 2 }
    static get STATUS_INACTIVE() { return 3 }

    get readStatus() {
        switch(this.status) {
            case this.STATUS_ADDED:
                return 'Added';
            case this.STATUS_VALIDATING:
                return 'Validating';
            case this.STATUS_ACTIVE:
                return 'Active';
            case this.STATUS_INACTIVE:
                return 'Inactive';
        }
    }
}

module.exports = Beneficiary
