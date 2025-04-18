import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SiteLogo from "./navigation/SiteLogo";
import DesktopNavLinks from "./navigation/DesktopNavLinks";
import MobileNavLinks from "./navigation/MobileNavLinks";
import NavbarActions from "./navigation/NavbarActions";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <SiteLogo />

          <nav className="hidden md:flex items-center space-x-8">
            <DesktopNavLinks />
          </nav>

          <NavbarActions />

          <button className="block md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-6 space-y-5">
          <nav className="flex flex-col space-y-4">
            <MobileNavLinks />
          </nav>
          <div className="flex flex-col space-y-3">
            <Button variant="outline" size="sm" asChild className="justify-center">
              <Link to="/contact?type=appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
