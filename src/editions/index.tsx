import Image from 'next/image'
import './style.css'
export default function Editions() {
    return (

        <div>
            <h1 className='titulo-pagina'>Edições</h1>

            <div className='edicoes'>
                <Image
                    src='/images/covers/JORNAL-01-Novembro-2023.png'
                    alt='Capa da revista'
                    width={171}
                    height={158}
                />

                <h2>Primeira edição do Jornal Interprofissional</h2>

                <a className='cor_destaque_link' href='/docs/editions/JORNAL-01-VERSAO-FINA-ESTUDANTE-PARA-ESTUDANTE.pdf' target='_blank'>Download</a>

            </div>
        </div>
    )
}