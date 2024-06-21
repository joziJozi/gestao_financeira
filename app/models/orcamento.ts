import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Orcamento extends BaseModel {
  @column({ isPrimary: true })
  public orcamento_id: number

  @column()
  public usuario_id: number

  @column()
  public categoria_id: number

  @column()
  public valor: number

  @column.dateTime()
  public data_inicio: DateTime

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}