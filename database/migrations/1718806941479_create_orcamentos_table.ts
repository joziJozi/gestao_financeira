import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orcamentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('orcamento_id').primary()
      table.integer('usuario_id').unsigned().references('usuario_id').inTable('usuarios').onDelete('CASCADE')
      table.integer('categoria_id').unsigned().references('categoria_id').inTable('categoria_transacaos').onDelete('CASCADE')
      table.decimal('valor', 12, 2).notNullable()
      table.date('data_inicio').notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}