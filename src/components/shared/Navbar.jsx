import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      
      {/* Logo */}
      <Link to="/" className="text-indigo-600">
       <img src="https://wp.framerpeak.com/wion/wp-content/uploads/2025/10/logo-dark.svg"></img>
      </Link>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li>
          <Link to="/" className="hover:text-gray-500/80 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-500/80 transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-gray-500/80 transition">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="hover:text-gray-500/80 transition">
            Pricing
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li>
            <Link to="/" className="text-sm" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
