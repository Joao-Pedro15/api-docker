import { Pool, createPool } from "mysql2";

const config = {
 host: 'db',
 user: 'root',
 password: 'root',
 database: 'nodedb',
}

export class Database {
 public readonly connection: Pool

 constructor() {
  this.connection = this.getInstance()
 }

 getInstance() {
  if (!this.connection) {
   return createPool(config)
  }
  return this.connection
 }
}

