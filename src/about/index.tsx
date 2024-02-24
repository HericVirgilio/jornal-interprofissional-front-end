import Link_privacy from "@/src/link_privacy";

import Image from "next/image"
import './style.css'

export default function About() {
    return (
        <div className="sobre-container">
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
                        priority={true}
                    />

                    <p className="card-descricao">Cosplayer, apaixonado por Impressão 3D e por contruir “coisas” com Arduíno. Bruno é o que está sempre envolvido nos projetos que acontecem, sempre levando consigo o Just Dance e o Beat Saber para animar qualquer evento.</p>

                    <ul>
                        <li className="lista"><a className="cor_destaque_link_github link-github" href="https://github.com/Blimabru" target="_blank">Blimabru</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/bru.no_lima" target="_blank">@bru.no_lima</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
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
                        priority={true}
                    />

                    <p className="card-descricao">Primeira pessoa que vem a mente quando se fala de um bom Sumô Robô. Claudio passa a maior parte do seu tempo calibrando a mesa da Impressora 3D e está sempre topando qualquer projeto.</p>

                    <ul>
                        <li className="lista"><a className="cor_destaque_link_github link-github" href="https://github.com/ClaudioPalles" target="_blank">ClaudioPalles</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/claudio.pales" target="_blank">@Claudio.Pales</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
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
                        priority={true}
                    />

                    <p className="card-descricao">Membro mais experiente da equipe quando se trata de Desenvolvimento Web. Está sempre mantendo o grupo unido e motivado para realizar a construção do site. Isso quando não está assistindo animes, é claro.</p>

                    <ul>
                        <li className="lista"><a className="cor_destaque_link_github link-github" href="https://github.com/HericVirgilio" target="_blank">HericVirgilio</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/heric_viana_s" target="_blank">@heric_viana_s</a></li>
                        <li className="lista"><a className="cor_destaque_link link-instagram" href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a></li>
                    </ul>
                </div>
            </div>
            <div className="link-privacidade-sobre">
                <Link_privacy />
            </div>
        </div>
    )
}