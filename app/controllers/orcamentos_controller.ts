import type { HttpContext } from '@adonisjs/core/http'
import Orcamento from '#models/orcamento'

export default class OrcamentosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Orcamento.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Orcamento.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const dados = request.only(['usuario_id', 'categoria_id', 'valor', 'data_inicio', 'data_fim'])
        return await Orcamento.create(dados)
    }
    
    async update({ params, request }: HttpContext) {
        const orcamento = await Orcamento.findOrFail(params.id)
        const dados = request.only(['usuario_id', 'categoria_id', 'valor', 'data_inicio', 'data_fim'])
        orcamento.merge(dados)
        return await orcamento.save()
    }
    
    async destroy({ params }: HttpContext) {
        const orcamento = await Orcamento.findOrFail(params.id)
        await orcamento.delete()
        return { msg: 'Registro deletado com sucesso', orcamento }
    }
}