import { BaseSchema } from '@adonisjs/lucid/schema'
import { polymorphicTables } from '#database/polymorphic-tables'
import { makePolymorphicView } from '#database/helpers/make-polymorphic-view'

export default class extends BaseSchema {
  protected tableNames = Object.keys(polymorphicTables['likeables'])

  async up() {

    for(let tableName of this.tableNames)
      this.schema.createTable(tableName, (table) => {
        table.increments('id')
      
        table.integer("liker_id")
             .unsigned()
            //  .references("id")
            //  .inTable("users")
            //  .onDelete("CASCADE") 
        
        table.integer("liked_id")
             .unsigned()
            //  .references("id")
            //  .inTable("users")
            //  .onDelete("CASCADE") 

        table.timestamp('created_at')
        table.timestamp('updated_at')
      })

      this.schema.raw(makePolymorphicView("likes", this.tableNames))
  }

  async down() {
    for(let tableName of this.tableNames) {
      this.schema.dropTable(tableName)
    }
  }
}