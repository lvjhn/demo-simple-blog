import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {

    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string("body").notNullable()
      table.integer("author_id")
           .unsigned() 
          //  .references("id")
          //  .inTable("users")
          //  .onDelete("CASCADE")

      table.integer("post_id") 
           .unsigned()
          //  .references("id")
          //  .inTable("posts")
          //  .onDelete("CASCADE") 

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}