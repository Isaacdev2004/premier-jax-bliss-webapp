
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MobileNavLinks = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" }, // Updated label
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

export default MobileNavLinks;
