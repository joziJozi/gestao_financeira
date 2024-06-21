import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public usuario_id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public senha_hash: string

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}