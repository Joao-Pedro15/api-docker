import { Channel, Connection, connect, Message, Options, ConsumeMessage } from "amqplib";

const options: Options.Connect = {
 port: 5672,
 password: 'root',
 username: 'root',
 hostname: 'rabbit'
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

 async consumer(queue: string): Promise<ConsumeMessage | null> {
  let message: ConsumeMessage | null = null
  await this.channel?.consume(queue, msg => {
   if (msg) {
    message = msg
    this.channel?.ack(msg)
   }
  })
  return message
 }

}