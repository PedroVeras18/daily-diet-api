import { PrismaUsersRepository } from '@/repositories/prisma/prisma-user-repository'
import { PrismaMealsRepository } from '@/repositories/prisma/prisma-meals-repository'
import { CreateMealUseCase } from '../../meal/create/create-meal'
import { FetchMealsByUserUseCase } from '../../meal/fetch-by-user/fetch-meals-by-user'
import { GetMealByIdUseCase } from '../../meal/get-by-id/get-meal-by-id'
import { DeleteMealUseCase } from '@/use-cases/meal/delete/delete-meal'

const usersRepository = new PrismaUsersRepository()
const mealsRepository = new PrismaMealsRepository()

export function makeCreateMealUseCase() {
  return new CreateMealUseCase(usersRepository, mealsRepository)
}

export function makeFetchMealsByUser() {
  return new FetchMealsByUserUseCase(usersRepository, mealsRepository)
}

export function makeGetMealById() {
  return new GetMealByIdUseCase(usersRepository, mealsRepository)
}

export function makeDeleteMealUseCase() {
  return new DeleteMealUseCase(mealsRepository)
}