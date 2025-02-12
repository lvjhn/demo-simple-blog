import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').notNullable()
      
      table.string("first_name", 64).notNullable()
      table.string("last_name", 64).notNullable()
      table.string("username", 32).notNullable()
      table.string("email", 256).notNullable()
      table.string("password", 256).notNullable()
      table.string("gender", 32).notNullable()
      table.dateTime("birthdate").notNullable()
      table.integer("country_id")
           .unsigned()
          //  .references("id")
          //  .inTable("countries")
          //  .onDelete("CASCADE")
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}