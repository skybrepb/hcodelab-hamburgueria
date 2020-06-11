'use strict'

const Contato =  use('App/Models/Contato')

class ContatoController {

  async store ({ request }) {
    const data = request.only(['name','email','phone','birth_at'])

    const contato = await Contato.create(data)

    return contato
  }

}

module.exports = ContatoController
