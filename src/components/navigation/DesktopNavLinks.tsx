
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

export default DesktopNavLinks;
