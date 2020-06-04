'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardapioSchema extends Schema {
  up () {
    this.create('cardapios', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique() 
      table.text('description').notNullable()
      table.string('photo',254).notNullable()
      table.decimal('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('cardapios')
  }
}

module.exports = CardapioSchema
