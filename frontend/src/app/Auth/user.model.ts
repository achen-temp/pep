export class User{ 
    constructor(
        public user:string, 
        public roles: Array<string>
    ){}
}

export enum UserRole{
    ADMIN = "ROLE_ADMIN",
    USER = "ROLE_USER"
}