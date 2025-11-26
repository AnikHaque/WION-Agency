import CompanyLogos from "../components/Brands";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioGallery from "../components/PortfolioGallary";
import { Testimonial } from "../components/Testimonial";
import PortfolioFeaturesSection from "../PortfolioFeatured";

export default function Portfolio() {
  return (
   <>
  <PortfolioBanner></PortfolioBanner>
  <PortfolioFeaturesSection></PortfolioFeaturesSection>
  <PortfolioGallery></PortfolioGallery>
  <Testimonial></Testimonial>
  <CompanyLogos></CompanyLogos>
   </>
  );
}
