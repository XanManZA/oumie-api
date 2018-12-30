'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoundclipsSchema extends Schema {
	async up () {
		let exists = await this.hasTable('soundclips');

		if (!exists)
			this.create('soundclips', (table) => {
				table.increments()
				table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
				table.string('url', 511)
				table.timestamps()
			})
	}

	async down () {
		let exists = await this.hasTable('soundclips');

		if (exists)
			this.drop('soundclips')
	}
}

module.exports = SoundclipsSchema
