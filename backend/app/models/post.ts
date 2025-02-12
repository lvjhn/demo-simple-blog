import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import Comment from './comment.js'

import { likeables } from './like.js'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare title: string 

  @column() 
  declare body: string 

  @column() 
  declare author_id: number

  @belongsTo(() => User, { foreignKey: "author_id" })
  declare user: BelongsTo<typeof User> 

  @hasMany(() => Comment) 
  declare comments: HasMany<typeof Comment>

  @hasMany(() => likeables.PostLike, { foreignKey: "liked_id" }) 
  declare likes: HasMany<typeof likeables.PostLike>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}



