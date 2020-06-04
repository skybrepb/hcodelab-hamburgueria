'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaleconoscoSchema extends Schema {
  up () {
    this.create('faleconoscos', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('email', 254).notNullable()
      table.string('phone', 80).notNullable()
      table.text('message')
      table.timestamps()
    })
  }

  down () {
    this.drop('faleconoscos')
  }
}

module.exports = FaleconoscoSchema
