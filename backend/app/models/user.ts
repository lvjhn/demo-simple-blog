import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo } from '@adonisjs/lucid/orm'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'

import Country from './country.js'
import Post from './post.js'
import Comment from './comment.js'
import Reply from './reply.js'
import NotificationMessage from './notification_message.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User)

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string 

  @column() 
  declare lastName: string

  @column()
  declare username: string

  @column() 
  declare email: string 

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare birthdate: DateTime

  @column() 
  declare country_id: number 

  @belongsTo(() => Country) 
  declare country: BelongsTo<typeof Country>

  @hasMany(() => Comment, { foreignKey: "author_id" }) 
  declare comments : HasMany<typeof Comment>
  
  @hasMany(() => Post, { foreignKey: "author_id" }) 
  declare posts : HasMany<typeof Post>

  @hasMany(() => Reply, { foreignKey: "author_id" }) 
  declare replies : HasMany<typeof Reply>

  @hasMany(() => NotificationMessage) 
  declare notifications : HasMany<typeof NotificationMessage>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}