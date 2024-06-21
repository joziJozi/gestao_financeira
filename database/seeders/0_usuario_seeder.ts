import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Usuario from '#models/usuario'
import { DateTime } from 'luxon'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      { 
        nome: 'José Silva', 
        email: 'josesilva@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Maria Oliveira', 
        email: 'mariaoliveira@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Pedro Sousa', 
        email: 'pedrosousa@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Ana Costa', 
        email: 'anacosta@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Carlos Santos', 
        email: 'carlossantos@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Lucia Fernandes', 
        email: 'luciafernandes@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Paulo Lima', 
        email: 'paulolima@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Fernanda Ribeiro', 
        email: 'fernandaribeiro@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'João Mendes', 
        email: 'joaomendes@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
      { 
        nome: 'Clara Martins', 
        email: 'claramartins@example.com', 
        senha_hash: await ('password123'), 
        criado_em: DateTime.local(), 
        atualizado_em: DateTime.local() 
      },
    ])
  }
}