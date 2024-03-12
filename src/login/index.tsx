import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import "./style.css"
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', { nome: username, senha: password });
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            router.push('/adm');
        } catch (error) {
            setError('Usuário ou senha inválidos');
        }
    };

    return (
        <div className="BoxLogin">
            <div className="BoxLeftCadastro">
                <div className="BoxCadastroLogin">
                    <h1>Bem-vindo</h1>
                    <p>Atenção este portal é apenas para administradores!</p>
                    <Link className="LinkParaCadastro" href={"/cadastro"}>Cadastre-se</Link>
                </div>
            </div>
            <div className="BoxRightLogin">
                <div>
                    <h1>Faça seu Login</h1>
                    <form className="FormularioLogin" onSubmit={handleSubmit}>
                        <input className="InputTextLogin" type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className="InputTextLogin" type="password" name="senhaUsuario" id="senhaUsuario" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input className="BotaoEntrarLogin" type="submit" value="Entrar" />
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
}
