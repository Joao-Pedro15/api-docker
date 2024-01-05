import { randomUUID } from "crypto";
import { UserDTO } from "./dtos/UserDTO";

export class User {
 private readonly id: string
 private readonly name: string
 private readonly email: string
 private readonly password: string | null
 private readonly photo: string | null
 private readonly googleID: string | null

 constructor({ id, email, googleID, name, password, photo }: UserDTO) {
  this.id = id ?? randomUUID()
  this.name = name
  this.email = email
  this.password = password
  this.photo = photo
  this.googleID = googleID
 }

}