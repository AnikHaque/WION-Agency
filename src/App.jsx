
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { PortfolioPreview } from "./components/Portfolio";
import { Services } from "./components/Services";
import Header from "./components/shared/Navbar";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonial";

function App() {
 

  return (
   <>
   <Header></Header>
   <Hero></Hero>
   <Services></Services>
   <PortfolioPreview></PortfolioPreview>
   <Stats></Stats>
   <Testimonials></Testimonials>
   <CTA></CTA>
   <Footer></Footer>
   </>
  );
}

export default App;
