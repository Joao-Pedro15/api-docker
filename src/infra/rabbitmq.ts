import { Channel, Connection, connect, Message, Options } from "amqplib";

const options: Options.Connect = {
 port: 5672,
 password: 'admin',
 username: 'admin',
 hostname: 'localhost'
}

export class RabbitMQ {
 private connection: Connection | null = null
 private channel: Channel | null = null
 constructor() { }


 async start(): Promise<void> {
  this.connection = await connect(options)
  this.channel = await this.connection.createChannel()
 }

 async publishInQueue(queue: string, message: string) {
  return this.channel?.sendToQueue(queue, Buffer.from(message))
 }

}