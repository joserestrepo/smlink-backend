import express, { Router } from 'express'
import helmet from 'helmet'
import { ConfigurationServer } from './models/server.interface'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from '../../configuration'

export class ServerApp {
  private readonly app = express()

  private readonly port: number

  private readonly router: Router

  constructor(configuration: ConfigurationServer) {
    const { port = 3000, router } = configuration
    this.port = port
    this.router = router
  }

  /**
   * configure our express server and start it up.
   */
  start() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(helmet())

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    this.app.use('/api', this.router)

    this.app.listen(this.port, () => {
      console.log(`Server running`)
    })
  }
}
