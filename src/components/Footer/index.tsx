import logo from "../../assets/images/logo.png"
import './index.component.css'

export default function Footer()
{
    const linkIcon = "https://icons8.com.br/icons/set/free-icons";

    return(
        <footer>
            <div className="containerFooter">
               <img src={logo} alt="Logo da empresa" />
            </div>

            <p>Todos os direitos reservados! <a href={ linkIcon } rel="noopener noreferrer" target="_blank" >Icons</a></p>
        </footer>
    )
}