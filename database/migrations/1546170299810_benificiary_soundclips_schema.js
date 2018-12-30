'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenificiarySoundclipsSchema extends Schema {
	async up () {
		this.table('soundclips', (table) => {
			table.dropForeign('user_id')
			table.dropColumn('user_id')
			table.integer('beneficiary_id').unsigned().references('id').inTable('beneficiaries').notNullable().after('id')
		})
	}

	async down () {
		this.table('soundclips', (table) => {
			// reverse alterations
			table.dropForeign('beneficiary_id')
			table.dropColumn('beneficiary_id')
			table.integer('user_id').unsigned().references('id').inTable('users').notNullable().after('id')
		})
	}
}

module.exports = BenificiarySoundclipsSchema
