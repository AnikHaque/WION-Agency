
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeatureDetails from "./components/FeatureDetails";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/features/:id" element={<FeatureDetails />} />
    </Routes>
  );
}

