import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('conta_id').primary()
      table.integer('usuario_id').unsigned().references('usuario_id').inTable('usuarios').onDelete('CASCADE')
      table.string('nome_conta').notNullable()
      table.string('tipo_conta').notNullable()
      table.decimal('saldo', 12, 2).notNullable()
      table.timestamp('criado_em', { useTz: true }).notNullable()
      table.timestamp('atualizado_em', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}