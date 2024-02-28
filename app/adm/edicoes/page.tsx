"use client"
import "./style.css"
import Header from "@/src/header"
import UploadPdf from "@/src/uploadPdf"

export default function SetEdicoes(){
    return(
        <div>
            <Header/>
            <UploadPdf/>
        </div>
    )
}