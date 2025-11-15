import './index.component.css'
import type { ElementType } from 'react';

import { linksSocial } from '../Listas';

export interface ListSocialLinks {
    id: string;
    iconLink: ElementType;
    href: string;
    rel: string;
    ariaLabel: string;
}


export default function Contato()
{
    return (
        <section id="contact">
            <h2>Contatos e Localização</h2>
            <address>
                <div className="containerLocalization">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.986000707158!2d-51.230255299999996!3d-30.02978525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519790e4d043eab%3A0x769a0820bae18fd4!2sCentro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1763164901517!5m2!1spt-BR!2sbr" 
                        width="600" height="450" 
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização da clínica no Google Maps">
                    </iframe>
                </div>
                <div className="containerSocial">
                    <h3>Minhas Redes e endereço:</h3>
                    <p>
                        Rua Marechal Floriano Peixoto <br />
                        N°: 185 <br />
                        Complemento: Conjunto 503 (5° andar) <br />
                    </p>
                    <ul className="listSocial">
                        { linksSocial.map( link => 
                            <li key={ link.id } >
                                <a href={ link.href } rel={ link.rel } aria-label={ link.ariaLabel }>
                                    { <link.iconLink /> }
                                </a>
                            </li>
                        ) }
                    </ul> 
                </div>
            </address>
        </section>
    )
}