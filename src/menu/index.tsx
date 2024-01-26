import './style.css'
export default function Menu() {
    return (
        <div className='menu'>
            <ul className='menu_lista'>
                
                <li><a href='/' className='link_menu'>Início</a></li>

                <li><a href='noticias' className='link_menu'>Notícias</a></li>
                
                <li><a href='edicoes' className='link_menu'>Edições</a></li>
                
                <li><a href='sobre' className='link_menu'>Sobre</a></li>
            </ul>
        </div>
    )

}