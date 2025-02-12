import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { hasMany } from '@adonisjs/lucid/orm'

import User from './user.js'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare code: string 
  
  @column() 
  declare name: string

  @hasMany(() => User) 
  declare users: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}