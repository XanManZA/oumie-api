'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenificiarySchema extends Schema {
	async up () {
		let exists = await this.hasTable('benificiaries');

		if (!exists)
			this.create('beneficiaries', (table) => {
				table.increments()
				table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
				table.string('name', 255).notNullable()
				table.string('mobile', 15).notNullable()
				table.integer('status').default(0)
				table.timestamps()
			})
	}

	async down () {
		let exists = await this.hasTable('beneficiaries');

		if (exists)
			this.drop('beneficiaries')
	}
}

module.exports = BenificiarySchema
