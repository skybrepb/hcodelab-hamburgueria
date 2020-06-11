'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contato', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 80).notNullable()
      table.date('birth_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('contato')
  }
}

module.exports = ContatoSchema
