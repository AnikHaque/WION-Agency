
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Header from "./components/shared/Navbar";
import { Stats } from "./components/Stats";
import Service from './components/Services'
import Portfolio from './components/Portfolio'
function App() {
 

  return (
   <>
   <Header></Header>
   <Hero></Hero>
   <Service></Service>
   <Portfolio></Portfolio>
   <Stats></Stats>
   <CTA></CTA>
   <Footer></Footer>
   </>
  );
}

export default App;
