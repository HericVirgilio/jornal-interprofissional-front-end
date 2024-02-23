"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './style.css';

export default function Menu() {
    // Inicializar o estado para determinar se está no lado do cliente
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Definir o estado como verdadeiro após a montagem do componente
        setIsClient(true);
    }, []); // O array vazio garante que isso só aconteça uma vez, sem dependências

    return (
        <div className='menu'>
            <ul className='menu_lista'>
                {/* Verificar se a rota atual é '/' e adicionar a classe 'active' se verdadeiro */}
                <li className="lista">
                    <Link href='/' className={`link_menu ${isClient && window.location.pathname === '/' ? 'active' : ''}`}>
                        Início
                    </Link>
                </li>
                {/* Verificar se a rota atual é '/noticias' e adicionar a classe 'active' se verdadeiro */}
                <li className="lista">
                    <Link href='/noticias' className={`link_menu ${isClient && window.location.pathname === '/noticias' ? 'active' : ''}`}>
                        Notícias
                    </Link>
                </li>
                {/* Verificar se a rota atual é '/edicoes' e adicionar a classe 'active' se verdadeiro */}
                <li className="lista">
                    <Link href='/edicoes'className={`link_menu ${isClient && window.location.pathname === '/edicoes' ? 'active' : ''}`}>
                        Edições
                    </Link>
                </li>
                {/* Verificar se a rota atual é '/sobre' e adicionar a classe 'active' se verdadeiro */}
                <li className="lista">
                    <Link href='/sobre' className={`link_menu ${isClient && window.location.pathname === '/sobre' ? 'active' : ''}`}>
                        Sobre
                    </Link>
                </li>
            </ul>
        </div>
    )
}
