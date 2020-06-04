'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FalecomSchema extends Schema {
  up () {
    this.create('falecoms', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('falecoms')
  }
}

module.exports = FalecomSchema
