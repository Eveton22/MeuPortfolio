import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";

import Project1 from '../../images/projetos/Captura de tela 2024-08-04 215512.png';
import Project2 from '../../images/projetos/Captura de tela 2024-08-04 215342.png';
import Project from '../../images/projetos/Captura de tela 2024-07-26 112932.png';
import firstProject from '../../images/projetos/Captura de tela 2024-03-12 213107.png'
import './projetos.module.css'

function Projetos(){
    return(
        <div>
            <Header />
                <main id="main-projetos">
                    <div>
                        <h3>Meus projetos realizado desde que conheco aplicações</h3>
                        <section>
                            <h5>Projeto de cadastro de usuario</h5>
                            <h5>Utilização do front end HTML, CSS, SASS E<br /> PHP para o back end</h5>
                            <img className="imgproject" src={Project1} alt="" /><br /><br />
                            <img src={Project2} alt="" /><br />
                            <a href="https://github.com/Eveton22/TesteFullStackZiriga" target="blank">Veja o projeto</a>
                        </section>
                        <section>
                            <h5>Projeto de Busca de Imoveis</h5>
                            <h5>Utitilização da front end em React JS e <br />backend em PHP Symfony</h5>
                            <img src={Project} alt="" /><br />
                            <a href="https://github.com/Eveton22/projetoImoveis" target="blank">Veja o projeto</a>
                        </section>
                        <section>
                            <h5>Projeto de ERP para ramos de autopeças</h5>
                            <h5>Utitilização da front end em React JS e <br />python com Mysql para back end</h5>
                            <img src={firstProject} alt="" /><br />
                            <a href="https://github.com/Eveton22/projetoImoveis" target="blank">Veja o projeto</a>
                        </section>
                    </div>
                </main>
            <Footer />
        </div>
    )
}

export default Projetos;