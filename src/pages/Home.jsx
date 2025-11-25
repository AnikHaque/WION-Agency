
import { CTA } from "../components/CTA";
import { Stats } from "../components/Stats";
import Portfolio from '../components/Portfolio'


import Footer from '../components/Footer'
import { Testimonial } from "../components/Testimonial";

import About from "../components/About";
import HeroSection from "../components/Hero";
import Features from "../components/Featured";

export default function Home() {
  return (
   <>
   <HeroSection></HeroSection>

   <About></About>
   <Portfolio></Portfolio>
   <Stats></Stats>
   <Features></Features>
   <Testimonial></Testimonial>
   <CTA></CTA>
   <Footer></Footer>
   
   
   </>
  );
}
