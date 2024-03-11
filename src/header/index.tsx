"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../menu';
import MenuHamburger from '../menuHamburger';
import './style.css';

export default function Header() {
  useEffect(() => {
    const cabecalho = document.getElementById('cabecalho');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        cabecalho.classList.add('cabecalho-recolhido');
        cabecalho.classList.remove('cabecalho-expandido');
      } else {
        cabecalho.classList.remove('cabecalho-recolhido');
        cabecalho.classList.add('cabecalho-expandido');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className={`cabecalho-container cabecalho-expandido`} id='cabecalho'>
      <Link href='/' className='logo-site'>
        <Image
          src='/images/icons/logo.png'
          width={50}
          height={50}
          alt='Logo Jornal Interprofissional'
          className='logo-site'
          priority={true}
        />
        <h1 className='titulo-site'>Jornal Interprofissional</h1>
      </Link>
      <nav>
      <Menu />
      </nav>
      <MenuHamburger />
    </div>
  )
}