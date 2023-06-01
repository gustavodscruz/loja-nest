import {Controller, Get, Post, Body} from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsarioDTO } from "./dto/criaUsuario.dto";


@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository:UsuarioRepository){

    }
    

    @Post()
    async criaUsuario(@Body() dadosDoUsuario:CriaUsarioDTO){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();

    }


}