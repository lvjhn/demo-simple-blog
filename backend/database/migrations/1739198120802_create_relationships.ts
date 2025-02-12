import { BaseSchema } from '@adonisjs/lucid/schema'
import { polymorphicTables } from '#database/polymorphic-tables'

export default class extends BaseSchema {

  async up() {
    this.schema.alterTable('users', (table) => {
      table.foreign("country_id").references("countries.id")
    })

    this.schema.alterTable("remember_me_tokens", (table) => {
      table.foreign("tokenable_id").references("users.id")
    })

    this.schema.alterTable("follows", (table) => {
      table.foreign("follower_id").references("users.id") 
      table.foreign("followee_id").references("users.id")
    })

    this.schema.alterTable("posts", (table) => {
      table.foreign("author_id").references("users.id")
    })

    this.schema.alterTable("comments", (table) => {
      table.foreign("author_id").references("users.id")
      table.foreign("post_id").references("posts.id")
    })

    this.schema.alterTable("replies", (table) => {
      table.foreign("author_id").references("users.id") 
      table.foreign("comment_id").references("comments.id")
    })

    this.schema.alterTable("notification_messages", (table) => {
      table.foreign("user_id").references("users.id")
    })

    for(let tableName in polymorphicTables['likeables']) {
      this.schema.alterTable(tableName, (table) => {
        table.foreign("liker_id").references(`users.id`)
        table.foreign("liked_id")
             .references(`${polymorphicTables['likeables'][tableName]}.id`)
      })
    }
  } 

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropForeign("country_id")
    })

    this.schema.alterTable("remember_me_tokens", (table) => {
      table.dropForeign("tokenable_id")
    })

    this.schema.alterTable("follows", (table) => {
      table.dropForeign("follower_id") 
      table.dropForeign("followee_id")
    })

    this.schema.alterTable("posts", (table) => {
      table.dropForeign("author_id")
    })

    this.schema.alterTable("comments", (table) => {
      table.dropForeign("author_id")
      table.dropForeign("post_id")
    })

    this.schema.alterTable("replies", (table) => {
      table.dropForeign("author_id") 
      table.dropForeign("comment_id")
    })

    this.schema.alterTable("notification_messages", (table) => {
      table.dropForeign("user_id")
    })

    for(let tableName in polymorphicTables) {
      this.schema.alterTable(tableName, (table) => {
        table.dropForeign("liker_id")
        table.dropForeign("liked_id")
      })
    }
  }
}