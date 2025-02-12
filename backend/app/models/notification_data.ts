import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import NotificationType from './notification_type.js'
import NotificationMessage from './notification_message.js'

import { likeables } from './like.js'
import { BaseLikeable } from './like.js'

export default class NotificationData extends BaseModel {
  static table = "notification_data"

  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare type_id: number

  @belongsTo(() => NotificationType)
  declare type: BelongsTo<typeof NotificationType>
  
  @hasMany(() => NotificationMessage) 
  declare notifications: HasMany<typeof NotificationMessage>

  @column() 
  declare payload: any 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}