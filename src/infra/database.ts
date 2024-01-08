import { Pool, createPool } from "mysql2";

const config = {
 host: 'localhost',
 user: 'root',
 password: 'root',
 database: 'mydatabase',
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

