import { AppRoutes, ServerApp } from './presentation'

import { envs } from './configuration'
import { MongoDatabase } from './data'
;(() => {
  main()
})()

async function main() {
  await MongoDatabase.connect({
    dbName: envs.MONGO_BD_NAME,
    mongoUrl: envs.MONGO_URL,
  })
  new ServerApp({ port: Number(envs.PORT), router: AppRoutes.routes }).start()
}
