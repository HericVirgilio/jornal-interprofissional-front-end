import Image from 'next/image'
import './style.css'

export default function Breaking_news() {
    return (

        <div>

            <h1 className='titulo-pagina'>Notícias</h1>

            <div className='breakingnews-container'>

                <div className='breakingnews-materia'>
                    <Image className='breakingnews-imgmateria' src='/images/covers/teste-capa.jpg' alt='Imagem de capa da notícia' width={360} height={360} priority={true}/>
                    <a className='breakingnews-titulomateria' href='https://www.instagram.com/plataformanerd.store/'>Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='breakingnews-leiamais' href='https://www.instagram.com/plataformanerd.store/'>Leia mais »</a>
                </div>

                <div className='breakingnews-materia'>
                    <Image className='breakingnews-imgmateria' src='/images/covers/teste-capa.jpg' alt='Imagem de capa da notícia' width={360} height={360} priority={true}/>
                    <a className='breakingnews-titulomateria' href='https://www.instagram.com/plataformanerd.store/'>Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='breakingnews-leiamais' href='https://www.instagram.com/plataformanerd.store/'>Leia mais »</a>
                </div>

                <div className='breakingnews-materia'>
                    <Image className='breakingnews-imgmateria' src='/images/covers/teste-capa.jpg' alt='Imagem de capa da notícia' width={360} height={360} priority={true}/>
                    <a className='breakingnews-titulomateria' href='https://www.instagram.com/plataformanerd.store/'>Primeira edição do Jornal Interprofissional</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a className='breakingnews-leiamais' href='https://www.instagram.com/plataformanerd.store/'>Leia mais »</a>
                </div>

            </div>

        </div>

    )
}