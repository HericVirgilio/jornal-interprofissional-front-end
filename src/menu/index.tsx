import Link from 'next/link'
import './style.css'

export default function Menu() {
    return (
        <div className='menu'>
            <ul className='menu_lista'>
                
                <li><Link href='/' className='link_menu'>Início</Link></li>

                <li><Link href='noticias' className='link_menu'>Notícias</Link></li>
                
                <li><Link href='edicoes' className='link_menu'>Edições</Link></li>
                
                <li><Link href='sobre' className='link_menu'>Sobre</Link></li>
            </ul>
        </div>
    )

}