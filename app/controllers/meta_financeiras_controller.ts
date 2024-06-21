import type { HttpContext } from '@adonisjs/core/http'
import MetaFinanceira from '#models/meta_financeira'

export default class MetaFinanceirasController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await MetaFinanceira.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await MetaFinanceira.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const dados = request.only(['usuario_id', 'nome_meta', 'valor_alvo', 'valor_atual', 'data_vencimento'])
        return await MetaFinanceira.create(dados)
    }
    
    async update({ params, request }: HttpContext) {
        const meta = await MetaFinanceira.findOrFail(params.id)
        const dados = request.only(['usuario_id', 'nome_meta', 'valor_alvo', 'valor_atual', 'data_vencimento'])
        meta.merge(dados)
        return await meta.save()
    }
    
    async destroy({ params }: HttpContext) {
        const meta = await MetaFinanceira.findOrFail(params.id)
        await meta.delete()
        return { msg: 'Registro deletado com sucesso', meta }
    }
}