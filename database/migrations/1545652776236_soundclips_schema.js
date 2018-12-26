'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoundclipsSchema extends Schema {
	up () {
		this.createIfNotExists('soundclips', (table) => {
			table.increments()
			table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
			table.string('url', 511)
			table.timestamps()
		})
	}

	down () {
		this.dropIfExists('soundclips')
	}
}

module.exports = SoundclipsSchema
