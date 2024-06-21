import { BaseSeeder } from '@adonisjs/lucid/seeders'
import CategoriaTransacao from '#models/categoria_transacao'
import { DateTime } from 'luxon'

export default class CategoriasTransacaoSeeder extends BaseSeeder {
  public async run () {
    await CategoriaTransacao.createMany([
      { 
        usuario_id: 1, 
        nome_categoria: 'Salário', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 2, 
        nome_categoria: 'Supermercado', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 3, 
        nome_categoria: 'Conta de Luz', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 4, 
        nome_categoria: 'Venda de Itens', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 5, 
        nome_categoria: 'Combustível', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 6, 
        nome_categoria: 'Bônus', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 7, 
        nome_categoria: 'Assinatura', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 8, 
        nome_categoria: 'Reforma', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 9, 
        nome_categoria: 'Restaurante', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 10, 
        nome_categoria: 'Freelance', 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      }
    ])
  }
}