
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

const Layout = () => {
  const location = useLocation();
  
  // Add scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-white w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Suspense fallback={
            <div className="flex items-center justify-center h-56">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-blue-200 mb-3 shimmer-animation"></div>
                <div className="h-4 w-32 bg-blue-100 rounded shimmer-animation"></div>
              </div>
            </div>
          }>
            <div 
              key={location.pathname} 
              className="page-transition fade-in"
              style={{ animationDuration: '0.5s' }}
            >
              <Outlet />
            </div>
          </Suspense>
        </main>
        <Footer />
        
        {/* Background decorative elements */}
        <div className="fixed top-0 left-0 w-1/3 h-1/3 bg-blue-100/20 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="fixed bottom-0 right-0 w-1/2 h-1/2 bg-teal-100/20 rounded-full blur-3xl -z-10 opacity-50"></div>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
