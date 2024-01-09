import { Controller } from "@/main/controller";
import { ConsumeMsgController } from "./ConsumeMsgController";
import { RabbitMQ } from "@/infra/rabbitmq";

export const makeConsumeMsgControllerFactory = (): Controller => {
 return new ConsumeMsgController(new RabbitMQ())
}