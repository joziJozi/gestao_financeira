import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('usuario_id').primary()
      table.string('nome').notNullable()
      table.string('email').notNullable().unique()
      table.string('senha_hash').notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}