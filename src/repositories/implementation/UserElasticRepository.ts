import { Client } from "elasticsearch";
import { UserRepository } from "../UserRepository";
import { User } from "@/entities/User";

export class UserElasticRepository implements UserRepository {
 private readonly db: Client
 constructor(db: Client) {
  this.db = db
 }

 async find(): Promise<User[]> {
  const query = await this.db.search({
   index: 'users',
   size: 100
  })
  const users = query?.hits?.hits?.map(item => item?._source) ?? []
  return users as User[]
 }

 async findByEmail(email: string): Promise<User[]> {
  return []
 }

}