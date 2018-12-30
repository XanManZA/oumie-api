'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
	async up () {
		let exists = await this.hasTable('users');

		if (!exists)
			this.create('users', (table) => {
				table.increments()
				table.string('name', 252).notNullable()
				table.string('surname', 252).notNullable()
				table.string('mobile', 15).notNullable().unique()
				table.string('password', 60).notNullable()
				table.timestamps()
			})
	}

	async down () {
		let exists = await this.hasTable('users');

		if (exists)
			this.drop('users')
	}
}

module.exports = UserSchema
