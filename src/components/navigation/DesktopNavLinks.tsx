
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const DesktopNavLinks = () => {
  const location = useLocation();
  const baseLinkStyle = "text-gray-700 hover:text-jax-primary transition-colors";
  const activeLinkStyle = "text-jax-primary font-semibold";
  
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
          className={location.pathname === item.path ? activeLinkStyle : baseLinkStyle}
        >
          {item.name}
        </Link>
      ))}
      
      <Link
        to="/internal-medicine"
        className={location.pathname === "/internal-medicine" ? activeLinkStyle : baseLinkStyle}
      >
        Internal Medicine
      </Link>
    </>
  );
};

export default DesktopNavLinks;
