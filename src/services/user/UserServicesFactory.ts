import { Database } from "@/infra/database"
import { UserServices } from "./UserServices"
import { UserMySqlRepository } from "@/repositories/implementation/UserMySqlRepository"

export const makeUserServiceFactory = () => {
 const database = new Database().connection
 const userRepository = new UserMySqlRepository(database)
 return new UserServices(userRepository)
}