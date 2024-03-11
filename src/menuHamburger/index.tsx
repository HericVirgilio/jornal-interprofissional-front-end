import Link from 'next/link';
import { useEffect, useState } from 'react';
import './style.css';

const MenuHamburger = () => {
    const [isClient, setIsClient] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="menu-hamburger">
            <div className="hamburger" onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`menu-hamburger-lista ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <li className="lista">
                    <Link href='/' className={`linkMenu ${isClient && window.location.pathname === '/' ? 'active' : ''}`}>
                        Início
                    </Link>
                </li>
                <li className="lista">
                    <Link href='/noticias' className={`linkMenu ${isClient && window.location.pathname === '/noticias' ? 'active' : ''}`}>
                        Notícias
                    </Link>
                </li>
                <li className="lista">
                    <Link href='/edicoes' className={`linkMenu ${isClient && window.location.pathname === '/edicoes' ? 'active' : ''}`}>
                        Edições
                    </Link>
                </li>
                <li className="lista">
                    <Link href='/sobre' className={`linkMenu ${isClient && window.location.pathname === '/sobre' ? 'active' : ''}`}>
                        Sobre
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuHamburger;