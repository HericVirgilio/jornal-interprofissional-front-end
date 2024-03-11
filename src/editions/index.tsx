import Image from 'next/image'
import './style.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

type Edicoes = {
    id: number;
    titulo: string;
    imagemAddress: string;
    pdfAdress: string;
  };

export default function Editions() {
    const [edicoes, setEdicoes] = useState<Edicoes[]>([]);
    useEffect(() => {
        const carregarNoticias = async () => {
          try {
            const response = await axios.get<Edicoes[]>('http://localhost:8080/edicoes');
            setEdicoes(response.data);
          } catch (error) {
            console.error('Erro ao carregar notícias:', error);
          }
        };
    
        carregarNoticias();
      }, []);
    return (

        <div className='edicoes-container'>
            {edicoes.map((edicoes) => (
                <div>
                    <h1 className='titulo-pagina'>{edicoes.titulo}</h1>
                    <div className='edicoes'>
                        <Image
                            src={edicoes.imagemAddress}
                            alt='Capa da revista'
                            width={171}
                            height={158}
                            priority={true}
                        />
                        <a className='cor_destaque_link' href={`http://localhost:8080/${edicoes.pdfAdress}`} target='_blank'>Download</a>
                    </div>
                </div>
            ))}
        </div>
    )
}