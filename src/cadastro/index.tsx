import "./style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CadastroForm() {

    const router = useRouter()

    const [redirecting,setRedirecting] = useState(true)

    const [formData, setFormData] = useState({
        nomeUsuario: "",
        senhaUsuario: "",
        senhaUsuarioDois: ""
    });

    const[popup, setpoup] = useState({display: "none"})

    const EnviaFormulario = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const CadastraUsuario = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita o envio padrão do formulário
        
        if (formData.senhaUsuario !== formData.senhaUsuarioDois) {
            console.error('As senhas não coincidem');
            return;
        }

        const token = localStorage.getItem('token')
        
        try {
            const response = await axios.post('http://localhost:8080/users', {
                nome: String(formData.nomeUsuario),
                senha: String(formData.senhaUsuario)
            },{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            } );
            router.push('http://localhost:3000/login');
            openOpUp()
        } catch (error:any) {
            console.error('Erro ao cadastrar usuário:', error.response);
        }
    };

    const openOpUp = () => {
        setpoup({display: "block"})
    }

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


    return (
        <div className="BoxCadastro">
            <div className="pop-up" style={popup}>
            <div>
                    <h5>Usuario Cadastrado</h5>
                        <Link href={"/login"}>
                            Deseja ir para a tala de login?
                        </Link>
                        <div>
                            Ficar onde estou
                        </div>
                    </div>
            </div>
            <div className="BoxCadastroLeft">
                <div>
                    <h1 className="TituloCadastro">Cadastre-se</h1>
                    <form className="BoxFormularioCadastro" onSubmit={CadastraUsuario}>
                        <input className="InputCadastro" type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome de Usuario"
                            value={formData.nomeUsuario} onChange={EnviaFormulario} />
                        <input className="InputCadastro" type="password" name="senhaUsuario" id="senhaUsuario" placeholder="Digite sua senha"
                            value={formData.senhaUsuario} onChange={EnviaFormulario} />
                        <input className="InputCadastro" type="password" name="senhaUsuarioDois" id="senhaUsuarioDois" placeholder="Digite sua senha novamente" value={formData.senhaUsuarioDois} onChange={EnviaFormulario} />
                        <input className="BotaoRegistraUsuario" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
            <div className="BoxCadastroRight">
                <div className="CaixaBoxCadastroRight">
                    <h1 className="tituloRightCadastro">Atenção</h1>
                    <p className="textoCadastro">Após o cadastro é necessário que alguém que tenha a chave de administrador aprove seu cadastro</p>
                </div>
            </div>
        </div>
    )
}