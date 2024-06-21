import MetaFinanceira from '#models/meta_financeira'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class MetaFinanceiraSeeder extends BaseSeeder {
  public async run () {
    await MetaFinanceira.createMany([
      { 
        usuario_id: 1, 
        nome_meta: 'Comprar um carro novo', 
        valor_alvo: 30000.00, 
        valor_atual: 5000.00, 
        data_vencimento: DateTime.local().plus({months: 6}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 2, 
        nome_meta: 'Viagem para Europa', 
        valor_alvo: 10000.00, 
        valor_atual: 2000.00, 
        data_vencimento: DateTime.local().plus({months: 6}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 3, 
        nome_meta: 'Reforma da casa', 
        valor_alvo: 20000.00, 
        valor_atual: 3000.00, 
        data_vencimento: DateTime.local().plus({months: 6}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 4, 
        nome_meta: 'Fazer um curso no exterior', 
        valor_alvo: 15000.00, 
        valor_atual: 4000.00, 
        data_vencimento: DateTime.local().plus({years: 1}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 5, 
        nome_meta: 'Aposentadoria', 
        valor_alvo: 500000.00, 
        valor_atual: 100000.00, 
        data_vencimento: DateTime.local().plus({years: 1}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 6, 
        nome_meta: 'Compra de terreno', 
        valor_alvo: 50000.00, 
        valor_atual: 8000.00, 
        data_vencimento: DateTime.local().plus({years: 1}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local().plus({months: 7})
      },
      { 
        usuario_id: 7, 
        nome_meta: 'Fundo de emergência', 
        valor_alvo: 20000.00, 
        valor_atual: 7000.00, 
        data_vencimento: DateTime.local().plus({months: 7}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 8, 
        nome_meta: 'Pós-graduação', 
        valor_alvo: 25000.00, 
        valor_atual: 10000.00, 
        data_vencimento: DateTime.local().plus({months: 7}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 9, 
        nome_meta: 'Compra de bicicleta elétrica', 
        valor_alvo: 5000.00, 
        valor_atual: 1500.00, 
        data_vencimento: DateTime.local().plus({months: 7}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 10, 
        nome_meta: 'Festa de casamento', 
        valor_alvo: 30000.00, 
        valor_atual: 12000.00, 
        data_vencimento: DateTime.local().plus({years: 1}), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
    ])
  }
}