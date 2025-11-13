import './index.component.css'
import { benefit } from '../Listas'

export interface ItemBenefit {
  id: string;
  icon: string;
  subtitle: React.ReactNode; 
  text: string;
}

export default function Benefit()
{
    return(
        <section className="benefitSession" id="benefit">
            <h2>Benefícios de vir a nossa clínica!</h2>
            <ul className="listBenefit">
                { benefit.map
                    ( list => 
                       <li key={ list.id }>
                           <img src={ list.icon } alt="icon de demonstração" width={80} />
                           <h3> { list.subtitle } </h3>
                           <p> { list.text } </p>
                       </li>
                    )
                }
            </ul>
        </section>
    )
}