'use strict'

const Cardapio =  use('App/Models/Cardapio')

class CardapioController {

  async store ({ request }) {
    const data = request.only(['name','description','photo','price'])

    const cardapio = await Cardapio.create(data)

    return cardapio
  }
  
}

module.exports = CardapioController
