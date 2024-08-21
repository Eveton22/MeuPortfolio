import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import './sobre.module.css'

function Sobre() {
    return(
        <div className="sobre">
            <Header />
                <main id="main-sobre">
                        <div>
                            <h2>RESUMO</h2>
                            <p>Olá tudo bem ?, bem vindo ao meu portfolio, achei que nunca iria dizer isso pela dimensao de conhecimentos
                                e desafios que travei para conseguir criar ele, mas com muita dedicação e esforço, Conseguiii, Meu nome Everton Damasceno, tenho 23 anos de idade
                                sou formado em Analise e Desenvolvimento de Sistemas pela (IMPACTA) e cursando atualmente Ciencias da Computação (CRUZEIRO DO SUL), ainda nao tive a oportunidade de ingressar
                                na área de T.I para obter experiencias, mas sinto que estou cada vez mais proximo, nao vou desistir por tantos nao que recebi, espero receber o incrivel SIM com o maior prazer de ter encarado e aprendi 
                                com isso que aprendemos e nos construimos até com as coisas que não deram certo!!, atualmente trabalho no ramo de Autopeças, sou um estoquista, mas minha paixao esta voltada a tecnologia, desde que aprendi com os primeiros conteudos
                                do famoso GUSTAVO GUANABARA em 2021, venho aprendendo constantemente evoluindo, curti e amei a área de Tecnologia, sou apaixonado pela construção da logica da criação e dos desafios que nos faz estar em aprendizagem constante.
                            </p>
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
                                <h3>Cursos complementares e Certificaçãoes</h3>
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
                                <li>Formação em Analise e Desenvolvimento de Sistemas IMPACTA 06/2024</li>
                                <li>Cursando Atualmente Ciencias da Computação - Cruzeiro do Sul 06/2024</li>
                            </ul>
                        </div>
                </main>
            <Footer/>
        </div>
    )
}

export default Sobre;