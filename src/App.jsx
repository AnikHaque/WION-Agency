import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeatureDetails from "./components/FeatureDetails";
import AboutPage from "./pages/About";
import Layout from "./Layout/MainLayout";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/Faq";


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
        <Route path="/features/:id" element={<FeatureDetails />} />
      </Route>
    </Routes>
  );
}
