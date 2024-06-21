import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CategoriaTransacao extends BaseModel {
  @column({ isPrimary: true })
  public categoria_id: number

  @column()
  public usuario_id: number

  @column()
  public nome_categoria: string

  @column.dateTime({ autoCreate: true })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public atualizado_em: DateTime
}