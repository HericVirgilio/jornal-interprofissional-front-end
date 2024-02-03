"use client"

// Importa os módulos necessários do React e Next.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Importa os estilos CSS
import './style.css';

// Componente funcional Banner
const Banner = () => {
  // Lista de objetos de imagens com id, caminho da imagem e texto alternativo
  const images = [
    { id: '1', image: '/images/banners/Banner1.png', alt: 'Banner nº 1 - Jornal Interprofissional' },
    { id: '2', image: '/images/banners/Banner2.png', alt: 'Banner Estamos em Manutenção! Voltaremos em breve' },
  ];

  // Estado para controlar o índice da imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para lidar com o clique nos retângulos de navegação
  const handleRectangleClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Efeito de intervalo para alternar automaticamente as imagens a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // Limpa o intervalo quando o componente é desmontado ou atualizado
    return () => clearInterval(interval);
  }, [images.length]);

  // Retorna o JSX do componente Banner
  return (
    <div className="banner-container">
      {/* Mapeia as imagens e renderiza os slides no banner */}
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`banner-slide ${index === currentImageIndex ? 'visible' : ''}`}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {/* Componente Image do Next.js para carregar as imagens responsivamente */}
          <Image
            src={item.image}
            alt={item.alt}
            layout="responsive"
            width={1920}
            height={500}
            className='banner-image'
            priority={false}
          />
        </div>
      ))}

      {/* Navegação na parte inferior do banner - retângulos */}
      <div className="banner-navigation">
        {images.map((_, index) => (
          <div
            key={index}
            className={`banner-rectangle ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleRectangleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Exporta o componente Banner
export default Banner;
