import type { HttpContext } from '@adonisjs/core/http'
import Transacao from '#models/transacao'

export default class TransacoesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Transacao.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Transacao.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const dados = request.only(['conta_id', 'categoria_id', 'valor', 'tipo_transacao', 'descricao', 'data_transacao'])
        return await Transacao.create(dados)
    }
    
    async update({ params, request }: HttpContext) {
        const transacao = await Transacao.findOrFail(params.id)
        const dados = request.only(['conta_id', 'categoria_id', 'valor', 'tipo_transacao', 'descricao', 'data_transacao'])
        transacao.merge(dados)
        return await transacao.save()
    }
    
    async destroy({ params }: HttpContext) {
        const transacao = await Transacao.findOrFail(params.id)
        await transacao.delete()
        return { msg: 'Registro deletado com sucesso', transacao }
    }
}