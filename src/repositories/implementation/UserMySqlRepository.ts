import { User } from "@/entities/User";
import { UserRepository } from "../UserRepository";
import { Pool } from 'mysql2'

export class UserMySqlRepository implements UserRepository {
 private readonly db: Pool
 constructor(db: Pool) {
  this.db = db
 }

 async find(): Promise<User[]> {
  const query = 'SELECT * FROM users'
  const result = await this.db.promise().query(query)
  const user = result[0] as User[]
  return user
 }

 async findByEmail(email: string): Promise<User[]> {
  const query = `SELECT * FROM users WHERE email = ${email} LIMIT 1`
  const result = await this.db.promise().query(query)
  const user = result[0] as User[]
  return user
 }
}