'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoundclipUserSchema extends Schema {
	async up () {
		let exists = await this.hasTable('soundclip_users');

		if (!exists)
			this.create('soundclip_users', (table) => {
				table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
				table.integer('soundclip_id').unsigned().references('id').inTable('soundclips').notNullable()
				table.timestamps()
			})
	}

	async down () {
		let exists = await this.hasTable('soundclip_users');

		if (exists)
			this.drop('soundclip_users')
	}
}

module.exports = SoundclipUserSchema
