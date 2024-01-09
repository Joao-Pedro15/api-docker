import { RabbitMQ } from "@/infra/rabbitmq";
import { RedisCache } from "@/infra/redis";
import { Controller } from "@/main/controller";
import { ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";

export class LoadUserController extends Controller {
 constructor(
  private userService: UserServices,
  private redisCache: RedisCache,
  private rabbitMQServer: RabbitMQ
 ) {
  super()
 }

 async execute() {
  const cache = await this.redisCache.get('all')
  await this.rabbitMQServer.start()
  await this.rabbitMQServer.publishInQueue('express', JSON.stringify({ message: 'hello' }))
  if (cache) return ok({ users: cache })
  const users = await this.userService.find()
  await this.redisCache.set('all', JSON.stringify(users))
  return ok({ users })

 }
}