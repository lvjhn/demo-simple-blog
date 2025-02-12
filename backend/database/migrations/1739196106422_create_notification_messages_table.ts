import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notification_messages'

  async up() {

    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.integer("user_id")
           .unsigned()
          //  .references("id")
          //  .inTable("users")
          //  .onDelete("CASCADE")

      table.timestamp("read_at")
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}