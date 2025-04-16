
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          <Link to="/" className="flex items-center space-x-3">
            <div className="font-bold text-2xl text-jax-primary">JAX</div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="font-semibold text-sm">Premier Health Center</span>
              <div className="flex text-xs text-gray-500 font-medium">
                <span className="border-r border-gray-300 pr-2 mr-2">Internal Medicine</span>
                <span>Vivid Bliss Med Spa</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <DesktopNavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
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
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-6 space-y-5">
          <nav className="flex flex-col space-y-4">
            <MobileNavLinks />
          </nav>
          <div className="flex flex-col space-y-3">
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

const DesktopNavLinks = () => {
  const location = useLocation();
  const baseLinkStyle = "text-gray-700 hover:text-jax-primary transition-colors";
  const activeLinkStyle = "text-jax-primary font-semibold";
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Services dropdown is handled separately
    { name: "Patient Resources", path: "/patient-resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={location.pathname === item.path ? activeLinkStyle : baseLinkStyle}
        >
          {item.name}
        </Link>
      ))}
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`p-0 h-auto bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
              location.pathname === "/internal-medicine" || location.pathname === "/med-spa" 
                ? activeLinkStyle 
                : baseLinkStyle
            }`}>
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[200px]">
              <ul className="grid gap-2 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/internal-medicine"
                      className={cn(
                        "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground",
                        location.pathname === "/internal-medicine" ? "bg-accent" : ""
                      )}
                    >
                      <div className="text-sm font-medium">Internal Medicine</div>
                      <p className="text-xs text-muted-foreground">Preventive care and chronic condition management</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/med-spa"
                      className={cn(
                        "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground",
                        location.pathname === "/med-spa" ? "bg-accent" : ""
                      )}
                    >
                      <div className="text-sm font-medium">Vivid Bliss Med Spa</div>
                      <p className="text-xs text-muted-foreground">Aesthetic treatments and skin rejuvenation</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

const MobileNavLinks = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Patient Resources", path: "/patient-resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`py-2 block ${
            location.pathname === item.path
              ? "text-jax-primary font-semibold"
              : "text-gray-700 hover:text-jax-primary"
          } transition-colors`}
        >
          {item.name}
        </Link>
      ))}
      
      <div className="py-2">
        <button 
          onClick={() => setServicesOpen(!servicesOpen)}
          className={`flex items-center justify-between w-full ${
            location.pathname === "/internal-medicine" || location.pathname === "/med-spa" 
              ? "text-jax-primary font-semibold" 
              : "text-gray-700"
          }`}
        >
          <span>Services</span>
          <ChevronDown 
            size={16} 
            className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        <div className={`overflow-hidden transition-all pl-4 ${servicesOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
          <Link
            to="/internal-medicine"
            className={`py-2 block ${
              location.pathname === "/internal-medicine"
                ? "text-jax-primary font-semibold"
                : "text-gray-700 hover:text-jax-primary"
            } transition-colors`}
          >
            Internal Medicine
          </Link>
          <Link
            to="/med-spa"
            className={`py-2 block ${
              location.pathname === "/med-spa"
                ? "text-jax-primary font-semibold"
                : "text-gray-700 hover:text-jax-primary"
            } transition-colors`}
          >
            Vivid Bliss Med Spa
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
