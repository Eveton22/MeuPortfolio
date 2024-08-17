import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import './sobre.module.css'

function Sobre() {
    return(
        <div className="sobre">
            <Header />
                <main id="main-sobre">
                        <div>
                            Minha Historia
                        </div>
                        <div>
                            <h3>Hobbies</h3>
                            <ul>
                                <li>Andar de Bicicleta.</li>
                                <li>Ler livros de Desenvolvimento pessoal e aventuras com magias.</li>
                                <li>Tocar Vilão - Musicas religiosas e sertanejo.</li>
                                <li>Jogo favorito - The Last Of Us.</li>
                                <li>Series e Filmes - Suspence e ficção científica</li>
                                <li>Assistir PosdCast relacionado com empreendimento, desenvolvimento pessoal.</li>
                                <li>Viajar - Sair com os amigos para lugares Diferentes.</li>
                            </ul>
                        </div>
                        <div>
                            Cursos Complementares e Certificados
                            <ul>
                                <li>Desenvolvimento web Completo -114Horas Udemy </li>
                                <li>.NET Developer 80Horas .Dio</li>
                                <li>Modelagem de Dados UML ${"(Análise&Projeto Orientado a Objeto)"}</li>
                                <li>React Js com TypeScript do zero ao Avançado na Pratica</li>
                                <li>SQL SERVER - Criando consultas, introduzindo, atualizando e deletando Dados</li>
                                <li>SQL SERVER 2016 - Criando Sistemas de Dados (Online) - 22Horas </li>
                                <li>Metodologia ágeis e ciclo de Desenvolvimento de Software</li>
                                <li>Java do Basico ao Avançado Com String boot</li>
                                <li>Noções de Git e GitHub </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Vida Academica</h3>
                            <ul>
                                <li>Formação em Analise e Desenvolvimento de Sistemas</li>
                                <li>Cursando Atualmente Ciencias da Computação</li>
                                <li>Formação em Analise e Desenvolvimento de Sistemas</li>
                            </ul>
                
                        </div>
                </main>
            <Footer/>
        </div>
    )
}

export default Sobre;