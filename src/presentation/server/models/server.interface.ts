import { Router } from 'express'

export interface ConfigurationServer {
  port?: number
  router: Router
}
