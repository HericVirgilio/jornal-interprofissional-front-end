import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./style.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function Noticias() {

   
    const router = useRouter()

    const [titulo, setTitulo] = useState<string>("");
    const [subTitulo, setSubTitulo] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTexto, setSelectedTexto] = useState<string>("");
    const [redirecting, setRedirecting] = useState(true);
    
    useEffect(() =>  {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('http://localhost:3000/login'); 
        } else {
            setRedirecting(false); // Indica que o redirecionamento foi concluído
        }
    }, []);
    if (redirecting) {
        return null;
    }


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

            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/noticias/cria-noticia', requestData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
            "Authorization": `Bearer ${token}`
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

            <div className="InputsFormBox">
                <form className="FormNoticias" onSubmit={EnviarFormParaAPI} >
                    <input className="InputText" type="text" placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}  />
                    <input className="InputSubtitulo" placeholder="Pré-texto" value={subTitulo} onChange={(e) => setSubTitulo(e.target.value)}  />
                    <label className="PictureLabel" style={{ backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : 'none', backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                        <input type="file" className="pictureInput" onChange={handleFileInputChange}  />
                        <span className="SpanText">Enviar Imagem</span>
                    </label>
                    <textarea className="TextoBox" id="texto-noticia" rows={20} cols={100} placeholder="Digite seu texto" value={selectedTexto} onChange={(e) => setSelectedTexto(e.target.value)}  />
                    <input type="submit" className="BotaoSubmit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}
function setRedirecting(arg0: boolean) {
    throw new Error("Function not implemented.");
}

