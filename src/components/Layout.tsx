
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

const Layout = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-white w-full">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Suspense fallback={
            <div className="flex items-center justify-center h-56">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-muted mb-3"></div>
                <div className="h-4 w-32 bg-muted rounded"></div>
              </div>
            </div>
          }>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
