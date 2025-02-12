import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notification_data'

  async up() {

    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("type").notNullable() 
      table.json("payload").notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}