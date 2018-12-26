'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.createIfNotExists('users', (table) => {
      table.increments()
      table.string('name', 252).notNullable()
      table.string('surname', 252).notNullable()
      table.string('mobile', 15).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('users')
  }
}

module.exports = UserSchema
