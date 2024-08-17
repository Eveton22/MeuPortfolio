import './header.css'
import iconeMenu from '../../images/icons8-cardápio-150.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [menuActive, setMenuActive] = useState('menu-none')
    const [menuOverlay, setMenuOverlay] = useState('menu-none')

    const handleActive = (e)=> {
        setMenuActive('menu-items')
        setMenuOverlay("menu-overlay")
    }

    const handleActive2 = (e)=> {
        setMenuActive('menu-none')
        setMenuOverlay('menu-none')
    }



    return(
        <header className="header">
            <nav>
                <h2>Everton Damasceno</h2>
                <img src={iconeMenu} alt="" onClick={handleActive} />
                <div id={menuOverlay} onClick={handleActive2}></div>
                <div id={menuActive}>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/sobre'>Sobre</Link></li>
                        <li><Link to='/habilidades'>Habilidades</Link></li>
                        <li><Link to='projetos'>Projetos</Link></li>
                        <li><Link to='contato'>Contato</Link></li>
                        <li><a href="" onClick={handleActive2}>Voltar</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;