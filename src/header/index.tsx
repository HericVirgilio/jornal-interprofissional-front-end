import './style.css'
export default function Header(){
    return(
        <div className='header'>
            <h1>Jornal Interprofissional</h1>
            <ul className='lista_header'>
                <li className='li_header'>Início</li>
                <li className='li_header'>Notícias</li>
                <li className='li_header'>Edições</li>
                <li className='li_header'>Sobre</li>
            </ul>
        </div>
    )
}