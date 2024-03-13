import Link from 'next/link'
import './style.css'

export default function LinkPrivacy() {
    return (
        <div className='link-privacidade'>
            <Link href='/privacidade'>Política de Privacidade e Termos de Uso</Link>
        </div>
    )
}