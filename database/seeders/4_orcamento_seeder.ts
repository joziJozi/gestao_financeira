import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Orcamento from '#models/orcamento'
import { DateTime } from 'luxon'

export default class OrcamentoSeeder extends BaseSeeder {
  public async run () {
    await Orcamento.createMany([
      { 
        usuario_id: 1, 
        categoria_id: 1, 
        valor: 1000.00, 
        data_inicio: DateTime.local(),  
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 2, 
        categoria_id: 2, 
        valor: 1500.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 3, 
        categoria_id: 3, 
        valor: 2000.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 4, 
        categoria_id: 4, 
        valor: 2500.00, 
        data_inicio: DateTime.local(),  
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 5, 
        categoria_id: 5, 
        valor: 3000.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 6, 
        categoria_id: 6, 
        valor: 3500.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 7, 
        categoria_id: 7, 
        valor: 4000.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local()
      },
      { 
        usuario_id: 8, 
        categoria_id: 8, 
        valor: 4500.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        usuario_id: 9, 
        categoria_id: 9, 
        valor: 5000.00, 
        data_inicio: DateTime.local(), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local()
      },
      { 
        usuario_id: 10, 
        categoria_id: 10, 
        valor: 5500.00, 
        data_inicio: DateTime.local(),  
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
    ])
  }
}