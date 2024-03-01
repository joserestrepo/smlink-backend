import swaggerJsDoc, { Options } from 'swagger-jsdoc'

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación',
      version: '1.0.0',
      description: 'Documentación de la api smlink',
    },
  },
  apis: ['./../presentation/routes.ts'],
}

export const swaggerSpec = swaggerJsDoc(options)
