"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios'; //npm install axios
import './style.css';

type Edicao = {
  id: number;
  titulo: string;
  imagemAddress: string;
  pdfAddress: string;
  data: string;
};

export default function Editions() {
  const [edicoes, setEdicoes] = useState<Edicao[]>([]);

  useEffect(() => {
    const carregarEdicoes = async () => {
      try {
        const response = await axios.get<Edicao[]>('http://localhost:8080/edicoes'); // Substitua '/api/edicoes' pelo endpoint real da sua API

        // Ordena as notícias pela data de publicação
        const edicoesOrdenadas = response.data.sort((a, b) => {
          const dataA = new Date(a.data).getTime();
          const dataB = new Date(b.data).getTime();
          return dataB - dataA; // Ordena do mais recente para o mais antigo
        });

        setEdicoes(edicoesOrdenadas);
      } catch (error) {
        console.error('Erro ao carregar as edições:', error);
      }
    };

    carregarEdicoes();
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

      <h1 className="titulo-pagina">Edições</h1>

        <div className="edicoes-container">
          {edicoes.map((edicao) => (
            <a key={edicao.id} className="edicao" target="_blank" href={edicao.pdfAddress}>
              <Image className='imgedicao' src={edicao.imagemAddress} alt="Imagem de capa da edição" width={360} height={360} priority={true} />
              <p className='tituloedicao'>{edicao.titulo}</p>
              <span className='dataPublicacao-preview-edicoes'>Publicado em: {formatarData(edicao.data)}</span>
              <span className='btn-download'>Download</span>
            </a>
          ))}
        </div>
      </div>
  );
}
