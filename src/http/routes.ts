import { FastifyInstance } from 'fastify'
import { userRoutes } from './routes/user-routes'
import { authRoutes } from './routes/auth-routes'
import { mealRoutes } from './routes/meal-routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(userRoutes)
  app.register(authRoutes)
  app.register(mealRoutes)
}
