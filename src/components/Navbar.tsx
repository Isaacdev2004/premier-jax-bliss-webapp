
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-jax-primary">JAX</div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="font-semibold text-sm">Premier Health Center</span>
              <div className="flex text-xs text-gray-500 font-medium">
                <span className="border-r border-gray-300 pr-2 mr-2">Internal Medicine</span>
                <span>Vivid Bliss Med Spa</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact" className="flex items-center gap-1">
                <Phone size={16} />
                <span className="hidden lg:inline">Book Appointment</span>
              </Link>
            </Button>
            <Button size="sm" className="bg-jax-primary hover:bg-jax-primary/90">
              <Link to="/contact" className="flex items-center">
                Request Consultation
              </Link>
            </Button>
          </div>

          <button className="block md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            <NavLinks mobile />
          </nav>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" size="sm" asChild className="justify-center">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button size="sm" className="bg-jax-primary hover:bg-jax-primary/90 justify-center">
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Internal Medicine", path: "/internal-medicine" },
    { name: "Med Spa", path: "/med-spa" },
    { name: "Patient Resources", path: "/patient-resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`${
            location.pathname === item.path
              ? "text-jax-primary font-semibold"
              : "text-gray-700 hover:text-jax-primary"
          } transition-colors ${mobile ? "py-2 block" : ""}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
