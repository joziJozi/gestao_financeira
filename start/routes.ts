/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsuariosController from '#controllers/usuarios_controller'
import ContasController from '#controllers/contas_controller'
import TransacoesController from '#controllers/transacoes_controller'
import CategoriaTransacoesController from '#controllers/categoria_transacoes_controller'
import OrcamentosController from '#controllers/orcamentos_controller'
import MetaFinanceirasController from '#controllers/meta_financeiras_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/Usuarios', UsuariosController).apiOnly()
router.resource('/Contas', ContasController).apiOnly()
router.resource('/Transacoes', TransacoesController).apiOnly()
router.resource('/CategoriasTransacoes', CategoriaTransacoesController).apiOnly()
router.resource('/Orcamentos', OrcamentosController).apiOnly()
router.resource('/MetasFinanceiras', MetaFinanceirasController).apiOnly()
