import Image from "next/image"

export default function Sobre() {
    return (
        <div>
            <h1>Sobre nós</h1>

            <div>
                <Image
                    src='/images/devs/Bruno.jpg'
                    alt='Foto do Bruno'
                    width={320}
                    height={320}
                    className='img-dev'
                    priority='false'
                />

                <h2>Bruno Moreira Lima</h2>

                <p>Cosplayer, apaixonado por Impressão 3D e por contruir “coisas” com Arduíno. Bruno é o que está sempre envolvido nos projetos que acontecem, sempre levando consigo o Just Dance e o Beat Saber para animar qualquer evento.</p>

                <span>Instagram</span>

                <a href="https://www.instagram.com/bru.no_lima/" target="_blank">@bru.no_lima</a>
                <a href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a>
                <a href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a>
            </div>

            
            <div>
                <Image
                    src='/images/devs/Claudio.jpg'
                    alt='Foto do Claudio'
                    width={320}
                    height={320}
                    className='img-dev'
                    priority='false'
                />

                <h2>Claudio Pales Costa</h2>

                <p>Primeira pessoa que vem a mente quando se fala de um bom Sumô Robô. Claudio passa a maior parte do seu tempo calibrando a mesa da Impressora 3D e está sempre topando qualquer projeto.</p>

                <span>Instagram</span>

                <a href="https://www.instagram.com/claudio.pales" target="_blank">@Claudio.Pales</a>
                <a href="https://www.instagram.com/PlataformaNerd.Store" target="_blank">@PlataformaNerd.Store</a>
                <a href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a>
            </div>

            
            <div>
                <Image
                    src='/images/devs/Heric.jpg'
                    alt='Foto do Heric'
                    width={320}
                    height={320}
                    className='img-dev'
                    priority='false'
                />

                <h2>Heric Virgilio Viana</h2>

                <p>Cabeça do Desenvolvimento Web da equipe, além de ser o membro mais experiente, está sempre mantendo a equipe unida e motivada para realizar a construção do site.</p>

                <span>Instagram</span>

                <a href="https://www.instagram.com/heric_viana_s" target="_blank">@heric_viana_s</a>
                <a href="https://www.instagram.com/BitMakers.tech" target="_blank">@BitMakers.tech</a>
            </div>
        
        </div>
    )
}