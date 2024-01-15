import { Database } from "@/infra/database"
import { UserServices } from "./UserServices"
import { UserMySqlRepository } from "@/repositories/implementation/UserMySqlRepository"
import { ElasticSearch } from "@/infra/elasticsearch"
import { UserElasticRepository } from "@/repositories/implementation/UserElasticRepository"

export const makeUserServiceFactory = (isElastic = false) => {
 if (isElastic) {
  const database = new ElasticSearch().instance
  const userRepository = new UserElasticRepository(database)
  return new UserServices(userRepository)
 }

 const database = new Database().connection
 const userRepository = new UserMySqlRepository(database)
 return new UserServices(userRepository)
}