'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoundclipStatusSchema extends Schema {
	up () {
		this.table('soundclips', (table) => {
			table.integer('status').default(0).after('url')
		})
	}

	down () {
		this.table('soundclips', (table) => {
			table.dropColumn('status');
		})
	}
}

module.exports = SoundclipStatusSchema
