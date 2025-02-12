import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import Post from './post.js'
import Reply from './reply.js'

import { likeables } from './like.js'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare body: string 

  @column() 
  declare user_id: number

  @belongsTo(() => User, { foreignKey: "author_id" }) 
  declare user: BelongsTo<typeof User> 

  @column() 
  declare post_id: number

  @belongsTo(() => Post)
  declare post: BelongsTo<typeof Post> 

  @hasMany(() => Reply) 
  declare replies: HasMany<typeof Reply>

  @hasMany(() => likeables.CommentLike, { foreignKey: "liked_id" }) 
  declare likes: HasMany<typeof likeables.CommentLike>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}