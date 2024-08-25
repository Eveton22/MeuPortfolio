import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header"
import './contato.css'

const Contato = ()=> {
    return(
        <div>
            <Header />
                <div id="main-contato">
                    <div className="whatsapp">
                            11977349702
                    </div>
                    <div className="linkedin">
                        <a href="https://linkedin.com/in/everton-damasceno-da-silva/" target="blank">LINKEDIN</a>
                    </div>
                    <div className="github">
                    <a href="https://github.com/Eveton22" target="blank">GITHUB</a>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contato;