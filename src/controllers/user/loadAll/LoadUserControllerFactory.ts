import { RedisCache } from '@/infra/redis'
import { LoadUserController } from './LoadUserController'
import { makeUserServiceFactory } from '@/services/user/UserServicesFactory'

export const makeLoadUserControllerFactory = (): LoadUserController => {
 return new LoadUserController(makeUserServiceFactory(), new RedisCache())
}