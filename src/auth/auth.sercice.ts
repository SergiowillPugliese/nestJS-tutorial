import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({
    
})
export class AuthService {

    constructor(private prisma: PrismaService){}

    signUp(){
        return {
            msg: 'Hello! SignUp'
        };
    }
    
    signIn(){
        return {
            msg: 'Hello! SignIn'
        };
    }
}