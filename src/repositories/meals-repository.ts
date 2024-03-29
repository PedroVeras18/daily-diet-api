import { GetMetricsUseCaseResponse } from '@/use-cases/meal/metrics/get-metrics'
import { Meal, Prisma } from '@prisma/client'

export interface MealsRepository {
  create(data: Prisma.MealUncheckedCreateInput): Promise<Meal>
  fetchByUser(userId: string, page: number): Promise<Meal[]>
  findById(mealId: string): Promise<Meal | null>
  delete(mealId: string): Promise<void>
  save(anInput: Prisma.MealUncheckedUpdateInput): Promise<void>
  getMetrics(userId: string): Promise<GetMetricsUseCaseResponse>
}
