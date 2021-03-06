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

Route.post('/admin/cardapio', 'CardapioController.store')         // Inclui um registro
Route.get('/admin/cardapio', 'CardapioController.index')          // lista todos os registros
Route.get('/admin/cardapio/:id', 'CardapioController.show')       //Lista um registro especifico
Route.put('/admin/cardapio/:id', 'CardapioController.update')    // Atualiza um registro
Route.delete('/admin/cardapio/:id', 'CardapioController.destroy') // Deleta um registro

Route.post('/admin/contato', 'ContatoController.store')         // Inclui um registro
Route.get('/admin/contato', 'ContatoController.index')          // lista todos os registros
Route.get('/admin/contato/:id', 'ContatoController.show')       //Lista um registro especifico
Route.put('/admin/contato/:id', 'ContatoController.update')    // Atualiza um registro
Route.delete('/admin/contato/:id', 'ContatoController.destroy') // Deleta um registro

Route.get('/admin/users', 'UserController.index') // Lista Usuários
Route.post('/admin/users', 'UserController.store') // Cadastra Usuários
Route.get('/admin/users/:id', 'ContatoController.show')       //Lista um registro especifico
Route.post('/admin/users/:id/uploads', 'UserController.changePhoto')
Route.get('/admin/users/:id/photo', 'UserController.photo')

Route.post('/auths', 'AuthController.store') // Autentica Usuário

