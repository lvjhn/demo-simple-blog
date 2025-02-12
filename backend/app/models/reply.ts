import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import { likeables } from './like.js'

import User from './user.js'
import Comment from './comment.js'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare body: string 

  @column() 
  declare author_id: number
  
  @belongsTo(() => User) 
  declare author: BelongsTo<typeof User>
 
  @column()
  declare comment_id: number

  @belongsTo(() => Comment) 
  declare comment: BelongsTo<typeof Comment> 

  @hasMany(() => likeables.ReplyLike, { foreignKey: "liked_id" }) 
  declare likes: HasMany<typeof likeables.ReplyLike>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}