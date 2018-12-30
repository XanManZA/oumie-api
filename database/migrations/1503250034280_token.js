'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
	async up () {
		let exists = await this.hasTable('tokens');

		if (!exists)
			this.create('tokens', (table) => {
				table.increments()
				table.integer('user_id').unsigned().references('id').inTable('users')
				table.string('token', 255).notNullable().unique().index()
				table.string('type', 80).notNullable()
				table.boolean('is_revoked').defaultTo(false)
				table.timestamps()
			})
	}

	async down () {
		let exists = await this.hasTable('tokens');

		if (exists)
			this.drop('tokens')
	}
}

module.exports = TokensSchema
