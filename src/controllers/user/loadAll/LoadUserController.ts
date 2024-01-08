import { Controller } from "@/main/controller";
import { ok } from "@/main/http";
import { UserServices } from "@/services/user/UserServices";

export class LoadUserController extends Controller {
 constructor(
  private userService: UserServices
 ) {
  super()
 }

 async execute() {
  const users = await this.userService.find()
  return ok({ users })

 }
}