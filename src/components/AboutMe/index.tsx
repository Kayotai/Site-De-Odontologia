import './index.component.css'
import Bruna from '../../assets/images/circle02.png'


export default function AboutMe()
{
    return(
        <section id="drBruna">
            <figure>
                <img src={ Bruna } alt="Foto da Doutora Bruna" />
            </figure>
            <div className="about">
                <h2><strong>Dr. Bruna</strong></h2>
                <p>
                    Olá! Sou a Dra. Bruna.
                    Se você é daquelas pessoas que sentem um frio na barriga só de pensar na cadeira do dentista, 
                    eu tenho uma boa notícia: a <strong>Odontologia Mudou</strong>, e o meu atendimento também.
                    Minha paixão pela odontologia nasceu da vontade de devolver a liberdade de sorrir
                    sem vergonha. Com especialização em <strong>Estética e Reabilitação Oral</strong>, 
                    entendo que cada paciente traz uma história única. 
                    Por isso, aqui não existe pressa. Existe escuta, café fresco e um planejamento feito a quatro mãos, 
                    respeitando o seu tempo e os seus desejos.
                </p>
                <p>
                    Utilizo técnicas minimamente invasivas e tecnologia digital 
                    para garantir que sua experiência seja leve, 
                    indolor e, acima de tudo, transformadora.
                </p>
                <p className="assinatura">
                    <em>Espero você para um café e uma conversa sobre <strong>o seu sorriso</strong>!</em>
                </p>
            </div>

        </section>
    )
}