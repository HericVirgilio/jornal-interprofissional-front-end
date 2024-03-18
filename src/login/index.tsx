import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import "./style.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Image from 'next/image';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
            <div className='Box'>
                <h1>Faça seu Login</h1>
                <Image src={"/images/icons/logo.png"} alt='' width={100} height={100}/>
                <form className="FormularioLogin" onSubmit={handleSubmit}>
                    <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Nome de usuário</InputLabel>
                        <OutlinedInput value={username} onChange={(e) => setUsername(e.target.value)}
                            type={'text'}
                            label="Nome de usuário"
                            size="small" />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Digite sua senha</InputLabel>
                        <OutlinedInput value={password} onChange={(e) => setPassword(e.target.value)}
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
                    <input className="BotaoEntrarLogin" type="submit" value="Entrar" style={{ width: '90%' }} />
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}
