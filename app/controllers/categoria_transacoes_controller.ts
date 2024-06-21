import type { HttpContext } from '@adonisjs/core/http'
import CategoriaTransacao from '#models/categoria_transacao'

export default class CategoriaTransacoesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await CategoriaTransacao.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await CategoriaTransacao.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const dados = request.only(['usuario_id', 'nome_categoria'])
        return await CategoriaTransacao.create(dados)
    }
    
    async update({ params, request }: HttpContext) {
        const categoria = await CategoriaTransacao.findOrFail(params.id)
        const dados = request.only(['usuario_id', 'nome_categoria'])
        categoria.merge(dados)
        return await categoria.save()
    }
    
    async destroy({ params }: HttpContext) {
        const categoria = await CategoriaTransacao.findOrFail(params.id)
        await categoria.delete()
        return { msg: 'Registro deletado com sucesso', categoria }
    }
}