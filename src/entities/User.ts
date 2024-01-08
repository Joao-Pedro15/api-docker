import { randomUUID } from "crypto";
import { UserDTO } from "./dtos/UserDTO";

export class User {
 public readonly id: string
 public readonly name: string
 public readonly email: string
 public readonly password: string | null
 public readonly photo: string | null
 public readonly googleID: string | null

 constructor({ id, email, googleID, name, password, photo }: UserDTO) {
  this.id = id ?? randomUUID()
  this.name = name
  this.email = email
  this.password = password
  this.photo = photo
  this.googleID = googleID
 }

}