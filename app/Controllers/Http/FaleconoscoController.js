'use strict'

const Faleconosco =  use('App/Models/Faleconosco')

class FaleconoscoController {

  async store ({ request }) {
    const data = request.only(['name','email','phone','message'])

    const faleconosco = await Faleconosco.create(data)

    return faleconosco
  }

}

module.exports = FaleconoscoController
