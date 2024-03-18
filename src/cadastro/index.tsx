import "./style.css"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function CadastroForm() {

    const router = useRouter()

    const [redirecting, setRedirecting] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaDois, setSenhaDois] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [popup, setpoup] = useState({ display: "none" })

    const CadastraUsuario = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita o envio padrão do formulário

        if (senha !== senhaDois) {
            console.error('As senhas não coincidem');
            return;
        }

        const token = localStorage.getItem('token')

        try {
            const response = await axios.post('http://localhost:8080/users', {
                nome: username,
                senha: senha
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            router.push('http://localhost:3000/login');
            openOpUp()
        } catch (error: any) {
            console.error('Erro ao cadastrar usuário:', error.response);
        }
    };

    const openOpUp = () => {
        setpoup({ display: "block" })
    }

    useEffect(() => {
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
        <div className="BoxLogin">
            <div className="Box">
                <h1 className="TituloCadastro">Cadastre-se</h1>
                <form className="BoxFormularioCadastro" onSubmit={CadastraUsuario}>

                    <FormControl className="InputsFormControl" sx={{ m: 1, width: '90%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Nome de usuário</InputLabel>
                        <OutlinedInput value={username} onChange={(e) => setUsername(e.target.value)}
                            type={'text'}
                            label="Nome de usuário"
                            size="small" />
                    </FormControl>
                    <FormControl className="InputsFormControl" sx={{ m: 1, width: '90%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Digite sua senha</InputLabel>
                        <OutlinedInput value={senha} onChange={(e) => setSenha(e.target.value)}
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } label="Digite sua senha" />
                    </FormControl>
                    <FormControl className="InputsFormControl" sx={{ m: 1, width: '90%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Digite sua senha novamente</InputLabel>
                        <OutlinedInput value={senhaDois} onChange={(e) => setSenhaDois(e.target.value)}
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } label="Digite sua senha novamente" />
                    </FormControl>
                    <input className="BotaoEntrarLogin" type="submit" value="Cadastrar" style={{width: '90%' }} />
                </form>
            </div>

        </div>
    )
}