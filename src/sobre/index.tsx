import Image from "next/image"
import './style.css'

export default function Sobre() {
    return (
        <div>
            <h1 className="titulo-pagina">Sobre nós</h1>

            <div className="sobre">

                <div className="card-sobre">

                    <h2 className="nome-dev">Bruno Moreira Lima</h2>

                    <Image
                        src='/images/devs/Bruno.jpg'
                        alt='Foto do Bruno'
                        width={320}
                        height={320}
                        className='img-dev'
                        priority='false'
                    />

                    <p className="card-descricao">Cosplayer, apaixonado por Impressão 3D e por contruir “coisas” com Arduíno. Bruno é o que está sempre envolvido nos projetos que acontecem, sempre levando consigo o Just Dance e o Beat Saber para animar qualquer evento.</p>

                    <ul>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/bru.no_lima/" target="_blank">@bru.no_lima</a></li>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a></li>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
                    </ul>

                </div>


                <div className="card-sobre">

                    <h2 className="nome-dev">Claudio Pales Costa</h2>

                    <Image
                        src='/images/devs/Claudio.jpg'
                        alt='Foto do Claudio'
                        width={320}
                        height={320}
                        className='img-dev'
                        priority='false'
                    />

                    <p className="card-descricao">Primeira pessoa que vem a mente quando se fala de um bom Sumô Robô. Claudio passa a maior parte do seu tempo calibrando a mesa da Impressora 3D e está sempre topando qualquer projeto.</p>

                    <ul>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/claudio.pales" target="_blank">@Claudio.Pales</a></li>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a></li>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
                    </ul>
                </div>


                <div className="card-sobre">

                    <h2 className="nome-dev">Heric Virgilio Viana</h2>

                    <Image
                        src='/images/devs/Heric.jpg'
                        alt='Foto do Heric'
                        width={320}
                        height={320}
                        className='img-dev'
                        priority='false'
                    />

                    <p className="card-descricao">Cabeça do Desenvolvimento Web da equipe, além de ser o membro mais experiente, está sempre mantendo a equipe unida e motivada para realizar a construção do site.</p>

                    <ul>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/heric_viana_s" target="_blank">@heric_viana_s</a></li>
                        <li><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}