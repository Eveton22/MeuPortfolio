import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header"

const Contato = ()=> {
    return(
        <div>
            <Header />
                <div id="main-contato">
                    <div className="whatsapp"></div>
                    <div className="linkedin"></div>
                    <div className="github"></div>
                </div>
            <Footer />
        </div>
    )
}

export default Contato;