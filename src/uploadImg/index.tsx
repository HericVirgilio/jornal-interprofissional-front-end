import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";
import axios from 'axios';

export default function FileInputNoticias() {

    const [titulo, setTitulo] = useState<string>("");
    const [subTitulo, setSubTitulo] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTexto, setSelectedTexto] = useState<string>("");

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };

    const EnviarFormParaAPI = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("file", selectedFile as File);
        formData.append("titulo", titulo);
        formData.append("preTexto", subTitulo);
        formData.append("textoNoticia", selectedTexto);


        const requestData = {
            titulo: titulo,
            subtitulo: subTitulo,
            texto: selectedTexto,
            file: selectedFile
        }

        try {
            const response = await axios.post('http://localhost:8080/noticias/cria-noticia', requestData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Certifique-se de definir o Content-Type como multipart/form-data
        }
    });
            console.log('Response:', response.data);
        } catch (error:any) {
            console.error('Erro ao cadastrar usuário:', error.response);
        }
    }

    return (
        <div className="BoxAdmNoticias">
            <h5>Publicar Notícia</h5>

            <form className="FormNoticias" onSubmit={EnviarFormParaAPI} >

                <input className="InputText" type="text" placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}  />

                <textarea className="InputSubtitulo" placeholder="Pré-texto" value={subTitulo} onChange={(e) => setSubTitulo(e.target.value)}  />


                <label className="PictureLabel" style={{ backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : 'none', backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <input type="file" className="pictureInput" onChange={handleFileInputChange}  />
                    <span className="SpanText">Enviar Imagem</span>
                </label>

                <textarea id="texto-noticia" rows={20} cols={100} placeholder="Digite seu texto" value={selectedTexto} onChange={(e) => setSelectedTexto(e.target.value)}  />
                <input type="submit" className="BotaoSubmit" value="Enviar" />
            </form>
        </div>
    );
}
