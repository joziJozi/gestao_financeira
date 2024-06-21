import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Transacao from '#models/transacao'
import { DateTime } from 'luxon'

export default class TransacaoSeeder extends BaseSeeder {
  public async run () {
    await Transacao.createMany([
      { 
        conta_id: 1, 
        categoria_id: 1, 
        valor: 500.00, 
        tipo_transacao: 'Receita', 
        descricao: 'Salário', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 2, 
        categoria_id: 2, 
        valor: 200.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Compra de supermercado', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 3, 
        categoria_id: 3, 
        valor: 150.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Conta de luz', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 4, 
        categoria_id: 4, 
        valor: 100.00, 
        tipo_transacao: 'Receita', 
        descricao: 'Venda de itens usados', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 5, 
        categoria_id: 5, 
        valor: 250.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Combustível', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 6, 
        categoria_id: 6, 
        valor: 1000.00, 
        tipo_transacao: 'Receita', 
        descricao: 'Bônus de desempenho', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 7, 
        categoria_id: 7, 
        valor: 75.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Assinatura de streaming', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 8, 
        categoria_id: 8, 
        valor: 300.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Reforma da casa', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 9, 
        categoria_id: 9, 
        valor: 50.00, 
        tipo_transacao: 'Despesa', 
        descricao: 'Jantar fora', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        conta_id: 10, 
        categoria_id: 10, 
        valor: 500.00, 
        tipo_transacao: 'Receita', 
        descricao: 'Freelance', 
        data_transacao: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      }
    ])
  }
}