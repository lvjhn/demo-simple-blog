import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import NotificationData from './notification_data.js'

export default class NotificationMessage extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare user_id: number

  @belongsTo(() => User) 
  declare user: BelongsTo<typeof User>

  @column() 
  declare data_id: number

  @belongsTo(() => NotificationData, { foreignKey: "data_id" })
  declare data: BelongsTo<typeof NotificationData>
 
  @column.dateTime({ autoCreate: true })
  declare readAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}