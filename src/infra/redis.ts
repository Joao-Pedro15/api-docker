import Redis, { RedisOptions } from 'ioredis'
import { promisify } from 'util'

const options: RedisOptions = {
 host: 'redis',
 port: 6379,
}

export class RedisCache {
 private instance: Redis | any
 constructor() {
  this.instance = this.getInstance()
 }

 getInstance() {
  if (!this.instance) return new Redis({ ...options })
  return this.instance
 }

 async set(key: string, value: string) {
  const fn = promisify(this.instance.set).bind(this.instance)
  return await fn(key, value)
 }

 async get(value: string) {
  const fn = promisify(this.instance.get).bind(this.instance)
  const item = await fn(value)
  if (!item) return null
  return JSON.parse(item)
 }
}