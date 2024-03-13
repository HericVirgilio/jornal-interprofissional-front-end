import "./style.css"
import { ChangeEvent, useState, FormEvent, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Edicoes() {

    const router  = useRouter()

    const [titulo, setTitulo] = useState<string>("")
    const [imagem, setImagem] = useState<File | null>(null)
    const [pdf, setPdf] = useState<File | null>(null)


    const [tituloDIV, setTituloDIV] = useState<string>("")
    const [imagemDIV, setImagemDIV] = useState<File | null>(null)
    const [pdfDIV, setPdfDIV] = useState<File | null>(null)

    const [redirecting,setRedirecting] = useState(true)

    useEffect(() =>  {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('http://localhost:3000/login'); 
        } else {
            const tokenParts = token.split('.');
            if (tokenParts.length === 3) {
                const payload = JSON.parse(atob(tokenParts[1]));
                if (payload && typeof payload.exp === 'number') {
                    const expirationTime = payload.exp;
                    const currentTime = Math.floor(Date.now() / 1000);
                    if (expirationTime < currentTime) {
                        router.push('http://localhost:3000/login'); 
                    } else {
                        setRedirecting(false);
                    }
                } else {
                    
                    router.push('http://localhost:3000/login');
                }
            } else {
                
                router.push('http://localhost:3000/login');
            }
        }
    }, []);


    const EnvioDeImagem = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]
        setImagem(file)
    }

    const EnvioPDF = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]
        setPdf(file)
    }

    const EnviarFormulario = async (event: FormEvent) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('imagem', imagem as File);
        formData.append('pdf', pdf as File);

        
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/edicoes/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log('Response:', response.data);
        } catch (error: any) {
            console.error('Erro ao enviar formulário:', error.response);
        }
    };
    return (
        <div className="BoxUploadPdf">
            <h5>Publicar Edições</h5>
            <form className="Formulario" onSubmit={EnviarFormulario}>

                <input type="text" placeholder="Titulo" required className="InputText" onChange={(e) => setTitulo(e.target.value)} />

                <label className="LabelImagem" style={{
                    backgroundImage: imagem ? `url(${URL.createObjectURL(imagem)})` : 'none',
                    backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat"
                }}>
                    <input type="file" required className="ImagemPdf" onChange={EnvioDeImagem} />
                    <span>Enviar Imagem</span>
                </label>

                <label className="PDF" style={{
                    backgroundImage: pdf ? `url(${URL.createObjectURL(pdf)})` : 'none',
                    backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat"
                }}>
                    <input type="file" required className="ImagemPdf" onChange={EnvioPDF} />
                    <span>Enviar PDF</span>
                </label>

                <input type="submit" className="BotaoSubmit" />
            </form>

            <div>
                {
                    (pdfDIV && imagemDIV && tituloDIV) &&
                    <div>
                        <h1>{tituloDIV}</h1>
                        <Image src={URL.createObjectURL(imagemDIV)} alt="" height={500} width={500} />

                        <object data={URL.createObjectURL(pdfDIV)} type="application/pdf" width="100%" height="500">
                            <p>Seu navegador não pode exibir PDFs. Você pode <a href={URL.createObjectURL(pdfDIV)}>baixá-lo aqui</a>.</p>
                        </object>
                    </div>
                }
            </div>
        </div>
    )
}

function jwt_decode(token: string) {
    throw new Error("Function not implemented.")
}
