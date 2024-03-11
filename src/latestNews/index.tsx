"use client"

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

export default function LatestNews() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const carregarNoticias = async () => {
      try {
        const response = await axios.get<Noticia[]>('http://localhost:8080/noticias'); // Substitua '/api/noticias' pelo endpoint real da sua API

        // Ordena as notícias pela data de publicação
        const noticiasOrdenadas = response.data.sort((a, b) => {
          const dataA = new Date(a.data).getTime();
          const dataB = new Date(b.data).getTime();
          return dataB - dataA; // Ordena do mais recente para o mais antigo
        });

        setNoticias(noticiasOrdenadas);
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      }
    };

    carregarNoticias();
  }, []);

  // Função para formatar a data no estilo DD-MM-AAAA
  const formatarData = (data: string) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };


  const ultimasNoticias = noticias.slice(0, 3); // Limita a exibição para as últimas 3 notícias

  return (
    <div>
      <h1 className="titulo-pagina">Últimas notícias</h1>

      <div className='latest-news-container'>
        <div className="latest-news">
          {ultimasNoticias.map((noticia) => (
            <a key={noticia.id} className="latest-news-materia" href="https://www.instagram.com/plataformanerd.store/">
              <Image className='latest-news-imgmateria' src={noticia.imagemAddress} alt="Imagem de capa da notícia" width={360} height={360} priority={true} />
              <p className='latest-news-titulomateria'>{noticia.titulo}</p>
              <p className='latest-news-subtitulomateria'>{noticia.subtitulo}</p>
              <span className='dataPublicacao-preview'>Publicado em: {formatarData(noticia.data)}</span>
              <span className='latest-news-leiamais'>Leia Mais »</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}