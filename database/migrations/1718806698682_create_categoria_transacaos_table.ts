import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categoria_transacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('categoria_id').primary()
      table.integer('usuario_id').unsigned().references('usuarios.usuario_id').onDelete('CASCADE')
      table.string('nome_categoria').notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}