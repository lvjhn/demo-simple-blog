import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Country from '#models/country'
import { fakerInstance } from '../../app/random.js'
import { chanceInstance } from '../../app/random.js'

export default class UserSeeder extends BaseSeeder {
  async run() {
    console.log("Populating users table...")
    const noOfUsers = 100
    const users = []

    const countries = await Country.all()
    const countryIds = countries.map(x => x.id)

    function randomCountryId() {
      return chanceInstance.pickone(countryIds)
    }
  

    for(let i = 0; i < noOfUsers; i++) {
      users.push({
        firstName : fakerInstance.person.firstName(),
        lastName  : fakerInstance.person.lastName(), 
        username  : fakerInstance.internet.username(),
        email     : fakerInstance.internet.email(), 
        password  : fakerInstance.internet.password(), 
        birthdate : fakerInstance.date.birthdate(), 
        gender    : fakerInstance.person.gender(),
        country   : randomCountryId()
      })
    }

    await User.createMany(users)
  }
}