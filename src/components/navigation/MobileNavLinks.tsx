
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MobileNavLinks = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Updated order - Services dropdown placed after About
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
    </>
  );
};

export default MobileNavLinks;
