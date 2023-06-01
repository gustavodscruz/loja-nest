import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@Injectable()
export class CriaUsarioDTO{
    
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, {message: 'O email informado é inválido'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}