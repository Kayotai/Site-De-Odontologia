import './index.component.css'
import logo from '../../assets/images/logo.png'

import { links } from '../Listas/'

export default function Header()
{
    return (
        <header>
            <img src= {logo} alt="Logo da Empresa Monguilhott" className="logo" />
            <nav aria-label="Navegação Principal">
                <ul className="listLinks">
                   { links.map(item => 
                        <li key={ item.id }>
                            <a href={item.href} aria-label= {item.arialabel}> { item.nameContentLink } </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}