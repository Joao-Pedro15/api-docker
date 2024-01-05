import { Connection } from "mysql";

export function promisedQuery(connection: Connection, query: string) {
 return new Promise((reject, resolve) => {
  connection.query(query, (err, result) => {
   if (err) reject(err)
   resolve(result)
  })
 })
}