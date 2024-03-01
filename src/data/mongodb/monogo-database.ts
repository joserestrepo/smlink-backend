import mongoose from 'mongoose'
import { Options } from './interfaces/'

export class MongoDatabase {
  /**
   * Connection to the mongo database
   * @param options
   */
  static async connect(options: Options) {
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
