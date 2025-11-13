import './index.component.css';
import circle3 from '../../assets/images/circle03.png';



export default function contentHero()
{
    return(
        <>
            <div className="containerEffect" id="home">    
                <div className="containerHero">
                    <div className="ctaHero">
                        <h1>Clínica Monguilhotte</h1>
                        <p>
                            Seu <strong>sorriso perfeito</strong> através de um <strong>tratamento discreto</strong> e 
                            dinovador, alinhe seus dentes com conforto, praticidade e liberdade.
                        </p>
                        <a href="#">Quero saber mais!</a>
                    </div>
                    <div className="imageHero">
                        <img src={ circle3 } alt="Foto de Sorriso 1" />
                    </div>
                </div>
            </div> 
            <div className="containerWave">
                <svg width="100%" height="100%" viewBox="0 0 1000 150" preserveAspectRatio="none">
                    <path id="onda2" 
                          d="M 1 90 C 150 40, 350 140, 500 90 C 650 40, 850 140, 1001 90 V 150 H -1 Z">
                    </path>
                    <path id="onda1" 
                          d="M 1 100 C 250 10, 350 140, 500 100 C 750 50, 850 150, 1001 90 V 150 H -1 Z">
                    </path>
                </svg>
            </div>
        </>
    )
}