import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeatureDetails from "./components/FeatureDetails";
import AboutPage from "./pages/About";
import Layout from "./Layout/MainLayout";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/Faq";
import ProjectDetails from "./components/PortfolioDetails";
import PricingPage from "./components/Pricing";
import Career from "./components/Career";
import Blog from "./components/Blog";


export default function App() {
  return (
    <Routes>
      {/* Wrap all pages with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features/:id" element={<FeatureDetails />} />
      </Route>
    </Routes>
  );
}
