import type { ItemBenefit } from "../beneficiosSection";
import type { ItemHeader } from "../Header";



export const links: ItemHeader[] = [
  { id: "home", nameContentLink: "Home", href: "#home", aria: "Home" },
  { id: "objetion", nameContentLink: "Serve para mim?", href: "#objetion", aria: "Serve para mim?" },
  { id: "benefit", nameContentLink: "Benefícios", href: "#benefit", aria: "Benefícios" },
  { id: "contact", nameContentLink: "Contatos", href: "#contact", aria: "Contato" }
];


export const benefit: ItemBenefit[] = [
   {
     id: "discreet", 
     icon: 'https://img.icons8.com/?size=80&id=121539&format=png&color=7bd4c6',
     subtitle: (<> Discreto por ser <span>Transparente</span> </>),
     text: "O Invisalign é feito a partir de um plástico médico transparente e resistente que é praticamente invisível!",
   },
   {
     id: "food", 
     icon: "https://img.icons8.com/?size=80&id=z8rVZwwi2sNj&format=png&color=7bd4c6",
     subtitle: (<><em>Não</em> atrapalha para comer ou beber </>),
     text: "Diferente dos brequetes do aparelho fixo, o Invisalign permite que você retire o aparelho para comer e fazer a higiene.",
   },
   {
     id: "unimpeded", 
     icon: "https://img.icons8.com/?size=80&id=y0s6iRCBaznT&format=png&color=7bd4c6",
     subtitle: (<> Livre de fios ou metais, muito mais <span>conforto!</span> </>),
     text: "A tecnologia vem crescendo e com isso o alinhamentos estéticos vão se tornando cada vez mais confortável e discretos.",
   },
   {
     id: "fast", 
     icon: "https://img.icons8.com/?size=80&id=H0JqzxqGxPQm&format=png&color=7bd4c6",
     subtitle: (<> Consultas e <strong>resultados mais rápidos</strong> </>),
     text: "Em média, as visitas ao dentista são de seis ou oito semanas, pois não há estrutura fixa aos dentes.",
   },
   {
     id: "speak", 
     icon: "https://img.icons8.com/?size=80&id=2672&format=png&color=7bd4c6",
     subtitle: (<> <em>Não</em> atrapalha para <span>falar</span> ou <span>cantar</span> </>),
     text: "O tratamento com Invisalign é bem discreto e como não sao volumosos, não atrapalham ao falar ou cantar.",
   },
   {
     id: "result", 
     icon: "https://img.icons8.com/?size=80&id=3E0xXSpI3ck6&format=png&color=7bd4c6",
     subtitle: (<> Veja o resultado <em>antes</em> de começar </>),
     text: "Com a ajuda do software, voce pode ter diferentes simulações de resultado antes mesmo de iniciar o tratamento Invisalign.",
   }
];