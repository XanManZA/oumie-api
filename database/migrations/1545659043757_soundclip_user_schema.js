'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoundclipUserSchema extends Schema {
	up () {
		this.createIfNotExists('soundclip_users', (table) => {
			table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
			table.integer('soundclip_id').unsigned().references('id').inTable('soundclips').notNullable()
			table.timestamps()
		})
	}

	down () {
		this.dropIfExists('soundclip_users')
	}
}

module.exports = SoundclipUserSchema
