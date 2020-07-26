import { Role } from "./role";

export class User {
    Id: number;
    Username: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Role: Role;
    Token?: string;
}
