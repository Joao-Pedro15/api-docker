import { RedisCache } from '@/infra/redis'
import { LoadUserController } from './LoadUserController'
import { makeUserServiceFactory } from '@/services/user/UserServicesFactory'
import { RabbitMQ } from '@/infra/rabbitmq'


export const makeLoadUserControllerFactory = (isElastic = false): LoadUserController => {
 return new LoadUserController(
  makeUserServiceFactory(isElastic),
  new RedisCache(),
  new RabbitMQ()
 )
}  