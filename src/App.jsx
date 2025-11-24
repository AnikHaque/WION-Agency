
import { Hero } from "./components/Hero";
import { PortfolioPreview } from "./components/Portfolio";
import { Services } from "./components/Services";
import Header from "./components/shared/Navbar";
import { Testimonials } from "./components/Testimonial";

function App() {
 

  return (
   <>
   <Header></Header>
   <Hero></Hero>
   <Services></Services>
   <PortfolioPreview></PortfolioPreview>
   <Testimonials></Testimonials>
   </>
  );
}

export default App;
