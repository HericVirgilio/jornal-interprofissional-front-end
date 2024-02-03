import Image from 'next/image'
import Link from 'next/link'
import Menu from '../menu'
import './style.css'

export default function Header() {
    return (
        <div className='cabecalho'>

            <Link href='/' className='titulo-site'><Image
                src='/images/icons/logo.png'
                width={50}
                height={50}
                alt='Logo Jornal Interprofissional'
                className='logo-site'

            />Jornal Interprofissional</Link>

            <Menu />
        </div>
    )
}