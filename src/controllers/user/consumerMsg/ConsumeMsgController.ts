import { RabbitMQ } from "@/infra/rabbitmq";
import { Controller } from "@/main/controller";
import { ok } from "@/main/http";

export class ConsumeMsgController extends Controller {

 constructor(
  private rabbitMQServer: RabbitMQ
 ) {
  super()
 }
 async execute() {
  await this.rabbitMQServer.start()
  const message = await this.rabbitMQServer.consumer('express')
  return ok({ message })
 }
} 