import { RedisCache } from '@/infra/redis'
import { LoadUserController } from './LoadUserController'
import { makeUserServiceFactory } from '@/services/user/UserServicesFactory'
import { RabbitMQ } from '@/infra/rabbitmq'

export const makeLoadUserControllerFactory = (): LoadUserController => {
 return new LoadUserController(
  makeUserServiceFactory(),
  new RedisCache(),
  new RabbitMQ()
 )
}  