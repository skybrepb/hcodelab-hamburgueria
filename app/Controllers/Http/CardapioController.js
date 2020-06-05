'use strict'

const Cardapio =  use('App/Models/Cardapio')

class CardapioController {

  async store ({ request }) {
    const data = request.only(['name','description','photo','price'])

    const cardapio = await Cardapio.create(data)

    return cardapio
  }

  async index () {
    return await Cardapio.all()                 // Lista todos os registros
  }

  async show ({ params }) {
    const cardapio = await Cardapio.findOrFail(params.id)   // Busca um registro pelo ID

    return cardapio
  }

  async update ({ params, request }) {
    const cardapio = await Cardapio.findOrFail(params.id)   // Busca um registro pelo ID

    const data = request.only(['name','description','photo','price'])  // Pega as alterações

    cardapio.merge(data)    // Efetua as alteraçõe no registro

    await cardapio.save() // Salva o registro alterado no banco

    return cardapio

  }

  async destroy ({ params }) {
    const cardapio = await Cardapio.findOrFail(params.id)

    await cardapio.delete()

    return `Intem ${cardapio.name} foi excluido com sucesso`

  }


  
}

module.exports = CardapioController
