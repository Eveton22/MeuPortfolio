import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import Main from '../../components/main/Main';
import './home.module.css'

function Home() {
    return(
        <div className="home">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;