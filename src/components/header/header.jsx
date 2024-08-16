import './header.css'
import iconeMenu from '../../images/icons8-cardápio-150.png'
import { useEffect, useState } from 'react'


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
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Habilidades</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="" onClick={handleActive2}>Voltar</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;