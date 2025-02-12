import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { createPolymorphicModels } from './helpers/create-polymorphic-models.js'

import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import Comment from './comment.js'
import Reply from './reply.js'
import Post from './post.js'

export default class Like extends BaseModel {
  static table = "likes"
}

export class BaseLikeable extends BaseModel
{
  @column() 
  declare liker_id: number 

  @column() 
  declare liked_id: number

  @belongsTo(() => User)
  declare liker: BelongsTo<typeof User>

  // --- handled by createPolymorphicModels
  declare liked: any
}


const mappings = {
  PostLike : ['post_likes', () => Post], 
  CommentLike : ['comment_likes', () => Comment], 
  ReplyLike : ['reply_likes', () => Reply]
}

interface Likeables {
  PostLike : typeof BaseLikeable, 
  CommentLike : typeof BaseLikeable,
  ReplyLike : typeof BaseLikeable
}

export const likeables : Likeables = 
  createPolymorphicModels(mappings, BaseLikeable)

