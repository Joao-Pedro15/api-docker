import { User } from "@/entities/User";

export interface UserRepository {
 find(): Promise<User[]>
 findByEmail(email: string): Promise<User[]>
}