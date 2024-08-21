import './main.css'
import fotoPerfil from '../../images/FotoPerfil.jpeg'
import { Link } from 'react-router-dom'
const Main = () => {
    return(
        <main id="main-inicio">

            <div className='div-foto'>
                <img src={fotoPerfil} className="foto" alt="fotoPerfil" />
            </div>
            <div className='div-texto'>
                <h2>Desenvolvedor Full Stack</h2><br></br>
                <h4>Ola Tudo Bem ?, meu nome é Everton, tenho 23 anos, sou formado em Analise e Densevolvimento de Sistemas e Cursando atualmente Ciencias da Computação, aqui no meu portfolio voce encontrara sobre mim !!</h4>
                <div className="div-button">
                    <Link to='/sobre'>SOBRE MIM</Link>
                </div>
            </div>
        </main>
    )
}

export default Main;