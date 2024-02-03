import Image from 'next/image'
import './style.css'

export default function News() {
    return (

        <div>

            <h1 className="titulo-pagina">Notícias</h1>

            <div className="noticias">

                <div className="materia">
                    <Image className='imgmateria' src="/images/covers/teste-capa.jpg" alt="Imagem de capa da notícia" width={360} height={360} />
                    <a className='titulomateria' href="https://www.instagram.com/plataformanerd.store/">Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='readmore' href="https://www.instagram.com/plataformanerd.store/">Leia mais »</a>
                </div>

                <div className="materia">
                    <Image className='imgmateria' src="/images/covers/teste-capa.jpg" alt="Imagem de capa da notícia" width={360} height={360} />
                    <a className='titulomateria' href="https://www.instagram.com/plataformanerd.store/">Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='readmore' href="https://www.instagram.com/plataformanerd.store/">Leia mais »</a>
                </div>

                <div className="materia">
                    <Image className='imgmateria' src="/images/covers/teste-capa.jpg" alt="Imagem de capa da notícia" width={360} height={360} />
                    <a className='titulomateria' href="https://www.instagram.com/plataformanerd.store/">Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='readmore' href="https://www.instagram.com/plataformanerd.store/">Leia mais »</a>
                </div>

            </div>

        </div>

    )
}