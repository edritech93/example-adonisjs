import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    const arrayTemp = []
    for (let i = 0; i < 10; i++) {
      arrayTemp.push({
        fullName: `User ${i}`,
        email: `email${i}@user.com`,
        password: '123qwe',
      })
    }
    await User.createMany(arrayTemp)
  }
}
