import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('transacao_id').primary()
      table.integer('conta_id').unsigned().references('conta_id').inTable('contas').onDelete('CASCADE')
      table.integer('categoria_id').unsigned().references('categoria_id').inTable('categoria_transacaos').onDelete('CASCADE')
      table.decimal('valor', 12, 2).notNullable()
      table.string('tipo_transacao').notNullable()
      table.string('descricao').nullable()
      table.timestamp('data_transacao', { useTz: true }).notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}