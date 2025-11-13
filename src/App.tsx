import Header from "./components/Header";
import ContentHero from "./components/ContentHero";
import Benefit from "./components/beneficiosSection";
import AboutMe from "./components/AboutMe";

function App() {

  return (
    <>
      <Header />
        <main>
          <ContentHero />
          <Benefit />
          <AboutMe />
        </main> 
    </>
  )
}

export default App;
