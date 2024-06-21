import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Conta from '#models/conta'
import { DateTime } from 'luxon'

export default class ContaSeeder extends BaseSeeder {
  public async run () {
    await Conta.createMany([
      { 
        usuario_id: 1, 
        nome_conta: 'Conta Corrente 1', 
        tipo_conta: 'Corrente', 
        saldo: 1000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 2, 
        nome_conta: 'Conta Poupança 1', 
        tipo_conta: 'Poupança', 
        saldo: 2000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 3, 
        nome_conta: 'Conta Corrente 2', 
        tipo_conta: 'Corrente', 
        saldo: 3000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 4, 
        nome_conta: 'Conta Poupança 2', 
        tipo_conta: 'Poupança', 
        saldo: 4000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 5, 
        nome_conta: 'Conta Corrente 3', 
        tipo_conta: 'Corrente', 
        saldo: 5000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 6, 
        nome_conta: 'Conta Poupança 3', 
        tipo_conta: 'Poupança', 
        saldo: 6000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 7, 
        nome_conta: 'Conta Corrente 4', 
        tipo_conta: 'Corrente', 
        saldo: 7000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 8, 
        nome_conta: 'Conta Poupança 4', 
        tipo_conta: 'Poupança', 
        saldo: 8000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 9, 
        nome_conta: 'Conta Corrente 5', 
        tipo_conta: 'Corrente', 
        saldo: 9000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 10, 
        nome_conta: 'Conta Poupança 5', 
        tipo_conta: 'Poupança', 
        saldo: 10000.00, 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      }
    ])
  }
}