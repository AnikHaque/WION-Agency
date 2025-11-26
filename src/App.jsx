
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeatureDetails from "./components/FeatureDetails";
import AboutPage from "./pages/About";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/about" element={< AboutPage/>} />
      <Route path="/features/:id" element={<FeatureDetails />} />
    </Routes>
  );
}

