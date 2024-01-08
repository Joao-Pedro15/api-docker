import { User } from "@/entities/User";
import { UserRepository } from "@/repositories/UserRepository";

export class UserServices {
 constructor(
  private repository: UserRepository
 ) { }

 async find() {
  const users = await this.repository.find()
  return users.length > 0 ? this.removePassword(users) : users
 }

 private removePassword(users: User[]) {
  return users.map(user => ({ ...user, password: null }))
 }
}