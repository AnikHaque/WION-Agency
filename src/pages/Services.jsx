
import { Stats } from "../components/Stats";
import Portfolio from '../components/Portfolio'
import { Testimonial } from "../components/Testimonial";
import About from "../components/About";
import HeroSection from "../components/Hero";
import Features from "../components/Featured";
import Services from "../components/Services";
import Promotional from "../components/Promotional";


export default function Home() {
  return (
   <>
   <HeroSection></HeroSection>
   <About></About>
   <Portfolio></Portfolio>
   <Stats></Stats>
   <Features></Features>
   <Services></Services>
   <Testimonial></Testimonial>
   <Promotional></Promotional>
   </>
  );
}
