import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

import { hasManyThrough } from '@adonisjs/lucid/orm'
import type { HasManyThrough } from '@adonisjs/lucid/types/relations'

import NotificationMessage from './notification_message.js'
import NotificationData from './notification_data.js'

export default class NotificationType extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasManyThrough([() => NotificationMessage, () => NotificationData], {
    throughForeignKey: "type_id",
    foreignKey: "data_id"
  })
  declare notifications: HasManyThrough<typeof NotificationMessage>

  @column()
  declare type: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}