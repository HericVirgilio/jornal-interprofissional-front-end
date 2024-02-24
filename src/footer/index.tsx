import Link_privacy from '../link_privacy'
import './style.css'

export default function Footer() {
    return (
        <div className='conjunto_rodape'>

            <div className='creditos_rodape'>
                <h1 className='titulo_rodape'>Desenvolvido por:</h1>
                <div className='coluna-rodape'>
                    <ul>
                        <li className="lista-rodape"><a href="https://www.instagram.com/bru.no_lima" className='link' target='_blank'><span className='cor_destaque_link'>@bru.no_lima</span></a>Bruno Lima</li>
                        <li className="lista-rodape"><a href="https://www.instagram.com/heric_viana_s/" className='link' target='_blank'><span className='cor_destaque_link'>@heric_viana_s</span></a>Heric Virgilio</li>
                        <li className="lista-rodape"><a href="https://www.instagram.com/claudio.pales" className='link' target='_blank'><span className='cor_destaque_link'>@claudio.pales</span></a>Claudio Pales</li>
                        <li className="lista-rodape"><a href="https://www.instagram.com/jpales_" className='link' target='_blank'><span className='cor_destaque_link'>@jpales_</span></a>João Pedro Pales</li>
                    </ul>
                    <Link_privacy />
                </div>
            </div>
        </div>
    )

}