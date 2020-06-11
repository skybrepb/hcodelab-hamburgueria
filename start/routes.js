'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/faleconosco', 'FaleconoscoController.store')

Route.post('/cardapio', 'CardapioController.store')         // Inclui um registro
Route.get('/cardapio', 'CardapioController.index')          // lista todos os registros
Route.get('/cardapio/:id', 'CardapioController.show')       //Lista um registro especifico
Route.put('/cardapio/:id', 'CardapioController.update')    // Atualiza um registro
Route.delete('/cardapio/:id', 'CardapioController.destroy') // Deleta um registro

Route.post('/contato', 'ContatoController.store')         // Inclui um registro
Route.get('/contato', 'ContatoController.index')          // lista todos os registros
Route.get('/contato/:id', 'ContatoController.show')       //Lista um registro especifico
Route.put('/contato/:id', 'ContatoController.update')    // Atualiza um registro
Route.delete('/contato/:id', 'ContatoController.destroy') // Deleta um registro

Route.post('/admin/users', 'UserController.store') // Cadastra Usuários
Route.post('/admin/users/:id/uploads', 'UserController.changePhoto')
Route.get('/admin/users/:id/photo', 'UserController.photo')


