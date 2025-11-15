import Header from "./components/Header";
import ContentHero from "./components/ContentHero";
import Benefit from "./components/beneficiosSection";
import AboutMe from "./components/AboutMe";
import Contato from "./components/Contact";

function App() {

  return (
    <>
      <Header />
        <main>
          <ContentHero />
          <Benefit />
          <AboutMe />
          <Contato />
        </main> 
    </>
  )
}

export default App;
