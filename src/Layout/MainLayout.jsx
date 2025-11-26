
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        {/* Outlet renders the page content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
