import './footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/Eveton22" target="blank">
                <div id="github">
                    <FaGithub id="git" />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/everton-damasceno-da-silva/' target="blank">
                <div id="linkedin">
                    <FaLinkedin id="linke" />
                </div>  
            </a>
            <a href='https://w.app/Erfs3J' target="blank">
                <div id="whatsapp">
                    <IoLogoWhatsapp id="what"/>
                </div>
            </a>
        </footer>
    )
}

export default Footer;