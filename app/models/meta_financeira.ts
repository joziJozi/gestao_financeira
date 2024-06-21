import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MetaFinanceira extends BaseModel {
  @column({ isPrimary: true })
  public meta_id: number

  @column()
  public usuario_id: number

  @column()
  public nome_meta: string

  @column()
  public valor_alvo: number

  @column()
  public valor_atual: number

  @column.dateTime()
  public data_vencimento: DateTime

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}