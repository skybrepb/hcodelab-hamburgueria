'use strict'

const Contato =  use('App/Models/Contato')

class ContatoController {

  async store ({ request }) {
    const data = request.only(['name','email','phone','birth_at'])

    const contato = await Contato.create(data)

    return contato
  }

  async index () {    // Lista todos os usuários
    return await Contato.all()
  }

  async show({ params }) {    // Lista um usuário pelo ID
    const contato = await Contato.findOrFail(params.id)

    return contato
  }

  async destroy({ params, auth, response}){
      const contato = await Contato.findOrFail(params.id)

      if(contato.id !== auth.contato.id) {
          return response.status(401).send({ error: 'Not Autorized'})
      }
      await contato.delete()
  }

  async update ({ params, request, response}) {
      // Efetua a busca do registro na tabela
      const contato = await Contato.findOrFail(params.id)
      //Preparando alteração
      const data = request.only(['name','email','phone','birth_at'])

      contato.merge(data)
      // Executa o commit na tabela
      await contato.save()

      return contato
  }



}

module.exports = ContatoController
