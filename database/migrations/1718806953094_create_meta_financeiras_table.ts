import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_financeiras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('meta_id').primary()
      table.integer('usuario_id').unsigned().references('usuarios.usuario_id').onDelete('CASCADE')
      table.string('nome_meta').notNullable()
      table.decimal('valor_alvo', 12, 2).notNullable()
      table.decimal('valor_atual', 12, 2).notNullable()
      table.date('data_vencimento').notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}