import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  public conta_id: number

  @column()
  public usuario_id: number

  @column()
  public nome_conta: string

  @column()
  public tipo_conta: string

  @column()
  public saldo: number

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}