
import { CTA } from "./components/CTA";
import { Stats } from "./components/Stats";
import Service from './components/Services'
import Portfolio from './components/Portfolio'


import Footer from './components/Footer'
import { Testimonial } from "./components/Testimonial";

import About from "./components/About";
import HeroSection from "./components/Hero";
function App() {
 

  return (
   <>

<HeroSection></HeroSection>

   <About></About>
   <Portfolio></Portfolio>
   <Stats></Stats>
   <Testimonial></Testimonial>
   <CTA></CTA>
   <Footer></Footer>
   </>
  );
}

export default App;
