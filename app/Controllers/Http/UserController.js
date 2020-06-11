'use strict'

const User = use('App/Models/User')
const Helpers = use('Helpers')
const fs = use('fs')
const readFile = Helpers.promisify(fs.readFile)
const uploadDir = 'uploads'

class UserController {

    async store ({ request }) { //Dados que usuário quer cadastrar
        const data = request.only(['username','email','password'])

        const user = await User.create(data)

        return user
    }

    async index () {    // Lista todos os usuários
        return await User.all()
    }

    async show({ params }) {    // Lista um usuário pelo ID
        const user = await User.findOrFail(params.id)

        return user
    }

    async destroy({ params, auth, response}){
        const user = await User.findOrFail(params.id)

        if(user.id !== auth.user.id) {
            return response.status(401).send({ error: 'Not Autorized'})
        }
        await user.delete()
    }

    async update ({ params, request, response}) {
        // Efetua a busca do registro na tabela
        const user = await User.findOrFail(params.id)
        //Preparando alteração
        const data = request.only(['username','email','password'])

        user.merge(data)
        // Executa o commit na tabela
        await user.save()

        return user
    }

    async changePhoto({params, request, response}) {

        const photo = request.file('file', {
            maxSize: '2mb',
            allowedExtensions: ['jpg','png','webP','jpeg', 'gif']
        })

        if (!photo) {
            responsse.status(400).json({error: 'File required'})
            return
        }

        const user = await User.findOrFail(params.id)
        const name = `${user.id}/photo.${photo.extname}`

        await photo.move(Helpers.resourcesPath(uploadDir), {
            name,
            overwrite: true
        })

        if( !photo.moved()) {
            response.status(400).json({'error': photo.error()})
        }

        user.photo = `${uploadDir}/${name}`
        
        await user.save()
        
        return user
    }

    //Carrega a foto do usuário
    async photo({params, response}) {

        const user = await User.findOrFail(params.id)

        const content = await readFile(Helpers.resourcesPath(user.photo))

        response.header('Content-type','image/*').send(content)

    }

    async changePassword({params, request, response, auth}) {
        const user = await User.findOrFail(params.id)

        const data = request.only(['passwordCurrent','passwordNew'])

        await auth.attempt(user.email, data.passwordCurrent)

        user.password = data.passwordNew

        await user.save()

        return user
    }
}

module.exports = UserController
