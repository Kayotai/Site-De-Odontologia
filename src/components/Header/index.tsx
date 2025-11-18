import React, { useState } from "react";
import './index.component.css'
import logo from '../../assets/images/logo.png'
import { links } from '../Listas/'
import { FiMenu, FiX } from "react-icons/fi";

export interface ItemHeader {
  id: string;
  nameContentLink: string;
  href: string;
  aria: string;
}

export default function Header()
{
    const [menu, setMenu] = useState(true);
    const handleClick = () => {
        setMenu(prevOpen => !prevOpen);
    };


    return (
        <header>
            <img src= {logo} alt="Logo da Empresa Monguilhott" className="logo" />
            <nav aria-label="Navegação Principal" className="nav">
                <ul className="listLinks">
                   { links.map(item => 
                        <li key={ item.id }>
                            <a href={item.href} aria-label= {item.aria}> { item.nameContentLink } </a>
                        </li>
                    )}
                </ul>
                <button className="menuBurger" onClick={ handleClick }> 
                    {menu? 
                        <FiMenu size={32} /> : <FiX size={32} /> 
                    } 
                </button>
            </nav>
        </header>
    )
}