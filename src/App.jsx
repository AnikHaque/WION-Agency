
import { CTA } from "./components/CTA";
import { Stats } from "./components/Stats";
import Service from './components/Services'
import Portfolio from './components/Portfolio'
import { Hero } from "./components/Hero";
import Header from "./components/shared/Navbar";
import About1 from "./components/About";
import Footer from './components/Footer'
function App() {
 

  return (
   <>
   <Header></Header>
<Hero></Hero>

   <Service></Service>
   <About1></About1>
   <Portfolio></Portfolio>
   <Stats></Stats>
   <CTA></CTA>
   <Footer></Footer>
   </>
  );
}

export default App;
