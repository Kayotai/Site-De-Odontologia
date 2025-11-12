import Header from "./components/Header";
import ContentHero from "./components/ContentHero";
import BgHero from "./components/BackgroundHero";

function App() {

  return (
    <>
      <Header />
        <main>
          <BgHero>
            <ContentHero />
          </BgHero>
        </main>
    </>
  )
}

export default App;
