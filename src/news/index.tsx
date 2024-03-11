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
  data: string;
};

export default function News() {
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

  return (

    <div >

      <h1 className="titulo-pagina">Notícias</h1>

      <div className='noticias-container'>

        <div className="noticias">
          {noticias.map((noticia) => (
            <a key={noticia.id} className="materia" href="https://www.instagram.com/plataformanerd.store/">
              <Image className='imgmateria' src={noticia.imagemAddress} alt="Imagem de capa da notícia" width={360} height={360} priority={true} />
              <p className='titulomateria'>{noticia.titulo}</p>
              <p className='subtitulomateria'>{noticia.subtitulo}</p>
              <span className='dataPublicacao-preview-noticias'>Publicado em: {formatarData(noticia.data)}</span>
              <span className='leiamais'>Leia Mais »</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
