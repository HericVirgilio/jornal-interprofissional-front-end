import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios'; //npm install axios
import './style.css';

type Noticia = {
  id: number;
  titulo: string;
  subtitulo: string;
  texto: string;
  imagemAddress: string;
};

export default function News() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const carregarNoticias = async () => {
      try {
        const response = await axios.get<Noticia[]>('http://localhost:8080/noticias'); // Substitua '/api/noticias' pelo endpoint real da sua API
        setNoticias(response.data);
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      }
    };

    carregarNoticias();
  }, []);

  return (
    <div >

    <h1 className="titulo-pagina">Notícias</h1>

     <div className='noticias-container'>
       
        <div className="noticias">
          {noticias.map((noticia) => (
            <div className="materia" key={noticia.id}>
              <Image className='imgmateria' src={noticia.imagemAddress} alt="Imagem de capa da notícia" width={360} height={360} priority={true}/>
              <p className='titulomateria'>{noticia.titulo}</p>
              <p>{noticia.subtitulo}</p>
              <a className='leiamais' href="https://www.instagram.com/plataformanerd.store/">Leia Mais »</a>
            </div>
          ))}
        </div>
     </div>
    </div>
  );
}
