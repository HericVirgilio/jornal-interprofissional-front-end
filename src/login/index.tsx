import "./style.css"
import Link from "next/link"
export default function Login(){
    return(
        <div className="BoxLogin">
            <div className="BoxLeftCadastro">
                <div className="BoxCadastroLogin">
                    <h1>Bem-vindo</h1>
                    <p>Atenção este portal é apenas para adminstradores!</p>
                    <Link className="LinkParaCadastro" href={"/cadastro"}>Cadastre-se</Link>
                </div>
            </div>
            <div className="BoxRightLogin">
                <div>
                    <h1>Faça seu Login</h1>
                    <form className="FormularioLogin">
                        <input className="InputTextLogin" type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome"/>
                        <input className="InputTextLogin" type="password" name="senhaUsuario" id="senhaUsuario" placeholder="Senha"/>
                        <input className="BotaoEntrarLogin" type="button" value="Entrar" />
                    </form>
                </div>
            </div>
        </div>
    )
}