import 'dotenv/config'
import { get } from 'env-var'

/**
 * we centralise our environment variables
 */
export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_BD_NAME: get('MONGO_BD_NAME').required().asString(),
}
