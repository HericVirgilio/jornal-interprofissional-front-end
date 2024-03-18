"use client"
import Header from "@/src/header";
import CadastroForm from "@/src/cadastro";
import "./style.css"

export default function Cadastro(){
    return(
        <div className="ContainerBackgroundLOgin">
            <Header/>
            <CadastroForm/>
        </div>
    )
}