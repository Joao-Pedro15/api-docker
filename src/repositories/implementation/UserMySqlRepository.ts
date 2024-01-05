import { User } from "@/entities/User";
import { UserRepository } from "../UserRepository";
import { Connection } from 'mysql'
import { promisedQuery } from '../../infra/promisedQuery'

export class UserMySqlRepository implements UserRepository {
 private readonly db: Connection
 constructor(db: Connection) {
  this.db = db
 }

 async find(): Promise<User[]> {
  const query = 'SELECT * FROM users'
  const user = await promisedQuery(this.db, query) as User[]
  return user
 }

 async findByEmail(email: string): Promise<User[]> {
  const query = `SELECT * FROM users WHERE email = ${email} LIMIT 1`
  const user = await promisedQuery(this.db, query) as User[]
  return user
 }
}