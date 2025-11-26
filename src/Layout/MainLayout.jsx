import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  // Check if current route is home ("/")
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Show Navbar only if NOT home page */}
      {!isHome && <Navbar />}

      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
