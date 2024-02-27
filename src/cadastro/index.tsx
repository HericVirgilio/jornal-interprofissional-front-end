import "./style.css"

export default function CadastroForm(){
    return(
        <div className="BoxCadastro">
            <div className="BoxCadastroLeft">
            <div>
                <h1 className="TituloCadastro">Cadastre-se</h1>
                    <form className="BoxFormularioCadastro">
                        <input className="InputCadastro" type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome de Usuario" />
                        <input className="InputCadastro" type="password" name="senhaUsuario" id="senhaUsuario" placeholder="Digire sua senha" />
                        <input className="InputCadastro" type="password" name="senhaUsuarioDois" id="senhaUsuarioDois" placeholder="Digite sua senha novamente" />
                        <input className="BotaoRegistraUsuario" type="button" value="Cadastrar" />
                    </form>
            </div>
            </div>
            <div className="BoxCadastroRight">
                <div className="CaixaBoxCadastroRight">
                    <h1 className="tituloRightCadastro">Atenção</h1>
                    <p className="textoCadastro">Após o cadastro é necessario que alguem que tenha a chave de administrador aprove seu cadastro</p>
                </div>
            </div>
        </div>
    )
}