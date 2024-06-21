import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Transacao extends BaseModel {
  @column({ isPrimary: true })
  public transacao_id: number

  @column()
  public conta_id: number

  @column()
  public categoria_id: number

  @column()
  public valor: number

  @column()
  public tipo_transacao: string

  @column()
  public descricao: string

  @column.dateTime()
  public data_transacao: DateTime

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}