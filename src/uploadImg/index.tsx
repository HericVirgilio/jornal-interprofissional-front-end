import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.css"
import Image from "next/image";

export default function FileInputnNoticias() {

    const [titulo, setTitulo] = useState<string>("");
    const [subTitulo, setSubTitulo] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTexto, setSelectedTexto] = useState<string>("");
    const [Form, setForm] = useState<FormData | null>(null);

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };

    const EnviarFormParaAPI = (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("selectedFile", selectedFile as File);
        formData.append("titulo", titulo);
        formData.append("preTexto", subTitulo);
        formData.append("textoNoticia", selectedTexto);
        console.log(formData)
        setForm(formData)
    }

    return (
        <div className="BoxAdmNoticias">
            <h5>Publicar Notícia</h5>

            <form className="FormNoticias" onSubmit={EnviarFormParaAPI} >

                <input className="InputText" type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} required />

                <textarea className="InputSubtitulo" placeholder="Pré-texto" onChange={(e) => setSubTitulo(e.target.value)} required />


                <label className="PictureLabel" style={{ backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : 'none', backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <input type="file" className="pictureInput" onChange={handleFileInputChange} required />
                    <span className="SpanText">Enviar Imagem</span>
                </label>

                <textarea id="texto-noticia" rows={20} cols={100} placeholder="Digite seu texto" onChange={(e) => setSelectedTexto(e.target.value)} required />

                <input className="BotaoEntrarLogin" type="submit" value="Postar Noticia" />
            </form>
        </div>
    );
}


