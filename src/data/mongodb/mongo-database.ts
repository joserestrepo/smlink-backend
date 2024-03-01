import mongoose from 'mongoose'
import { MongoOptions } from './interfaces'

export class MongoDatabase {
  /**
   * Connection to the mongo database
   * @param options
   */
  static async connect(options: MongoOptions) {
    const { dbName, mongoUrl } = options
    try {
      await mongoose.connect(mongoUrl, { dbName })
      console.log('Database Connect')
    } catch (error) {
      console.log('Mongo connect error')
      throw error
    }
  }
}
