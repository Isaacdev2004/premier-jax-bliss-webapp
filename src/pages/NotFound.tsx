
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-jax-primary mb-6">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <p className="text-gray-600 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-jax-primary hover:bg-jax-primary/90" asChild>
          <Link to="/" className="flex items-center">
            <Home size={18} className="mr-2" /> Return Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/" className="flex items-center">
            <ArrowLeft size={18} className="mr-2" /> Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
