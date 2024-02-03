"use client"

// Importa os módulos necessários do React e Next.js
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Importa os estilos CSS
import './style.css'

// Componente funcional Banner
const Banner = () => {
  // Lista de objetos de mídia com id, tipo (imagem ou vídeo), caminho e texto alternativo
  const mediaList = [
    { id: '1', type: 'image', source: '/images/banners/Banner1.png', alt: 'Banner nº 1 - Jornal Interprofissional' },
    { id: '2', type: 'image', source: '/images/banners/Banner2.png', alt: 'Banner nº 2 - Jornal Interprofissional' },
    { id: '3', type: 'video', source: '/images/banners/Banner3.webm', alt: 'Banner em vídeo nº 1 - Jornal Interprofissional' },
    { id: '4', type: 'video', source: '/images/banners/Banner4.webm', alt: 'Banner Estamos em Manutenção! Voltaremos em breve' },
  ];

  // Estado para controlar o índice da mídia atual
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Função para lidar com o clique nos retângulos de navegação
  const handleRectangleClick = (index) => {
    setCurrentMediaIndex(index);
  };

  // Efeito de intervalo para alternar automaticamente as mídias a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
    }, 10000);

    // Limpa o intervalo quando o componente é desmontado ou atualizado
    return () => clearInterval(interval);
  }, [mediaList.length]);

  // Retorna o JSX do componente Banner
  return (
    <div className="banner-container">
      {/* Mapeia as mídias e renderiza os slides no banner */}
      {mediaList.map((item, index) => (
        <div
          key={item.id}
          className={`banner-slide ${index === currentMediaIndex ? 'visible' : ''}`}
          style={{
            opacity: index === currentMediaIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {/* Renderiza imagem ou vídeo com base no tipo de mídia */}
          {item.type === 'image' ? (
            <Image
              src={item.source}
              alt={item.alt}
              width={1920}
              height={500}
              className='banner-image'
              priority={false}
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              className='banner-video'
            >
              <source src={item.source} type="video/webm" />
              Seu navegador não suporta essa funcionalidade.
            </video>

          )}
        </div>
      ))}

      {/* Navegação na parte inferior do banner - retângulos */}
      <div className="banner-navigation">
        {mediaList.map((_, index) => (
          <div
            key={index}
            className={`banner-rectangle ${index === currentMediaIndex ? 'active' : ''}`}
            onClick={() => handleRectangleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Exporta o componente Banner
export default Banner;
