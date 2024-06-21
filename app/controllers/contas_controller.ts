import type { HttpContext } from '@adonisjs/core/http'
import Conta from '#models/conta'

export default class ContasController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Conta.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Conta.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const dados = request.only(['usuario_id', 'nome_conta', 'tipo_conta', 'saldo'])
        return await Conta.create(dados)
    }
    
    async update({ params, request }: HttpContext) {
        const conta = await Conta.findOrFail(params.id)
        const dados = request.only(['usuario_id', 'nome_conta', 'tipo_conta', 'saldo'])
        conta.merge(dados)
        return await conta.save()
    }
    
    async destroy({ params }: HttpContext) {
        const conta = await Conta.findOrFail(params.id)
        await conta.delete()
        return { msg: 'Registro deletado com sucesso', conta }
    }
}