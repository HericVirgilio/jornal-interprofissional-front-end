"use client"
import "./style.css"
import Header from "@/src/header"
import Edicoes from "@/src/uploadPdf"
import Noticias from "@/src/uploadImg"
import { useState } from "react"
import DeleteEdicoes from "@/src/deleteEdicoes"
import DeleteNoticias from "@/src/deleteNoticias"

export default function Adm(){

    const [styleNoticias,setStyleNoticias] = useState<string>("block")
    const [styleEdicoes,setStyleEdicoes] = useState<string>("none")
    const [controle, setControle] = useState<boolean>(true)

    const Navegação = () =>{
        if(controle === true){
            setStyleNoticias("none")
            setStyleEdicoes("block")
        }else{
            setStyleNoticias("block")
            setStyleEdicoes("none")
        }
    }

    const MudarContador = () =>{
        if(controle === true){
            setControle(false)
            Navegação()
        }else{
            setControle(true)
            Navegação()
        }
    }

    return(
        <div>
            <Header/>
            <div className="BoxCapsula">
                <div className="NoticiasDiv" onClick={MudarContador}>Notícias</div>
                <div className="EdicoesDiv" onClick={MudarContador}>Edições</div>
            </div>
            <div style={{display: styleNoticias}}>
                <Noticias />
            </div>
            <div style={{display: styleEdicoes}}>
                <Edicoes />
            </div>
            <div>
                <h2>Apagar Noticias</h2>
            </div>
            <div>
                <DeleteNoticias/>
            </div>
            <div style={{display: styleEdicoes}}>
                <h2>Apagar Edições</h2>
                <DeleteEdicoes/>
            </div>
        </div>
    )
}