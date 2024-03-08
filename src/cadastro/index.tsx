import "./style.css"
import axios from "axios" //npm install axios
import { useState } from "react"
import Link from "next/link";

export default function CadastroForm() {
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

        try {
            const response = await axios.post('http://localhost:8080/users', {
                nome: String(formData.nomeUsuario),
                senha: String(formData.senhaUsuario)
            });
            console.log('Response:', response.data);
            openOpUp()
        } catch (error:any) {
            console.error('Erro ao cadastrar usuário:', error.response);
        }
    };

    const openOpUp = () => {
        setpoup({display: "block"})
    }


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