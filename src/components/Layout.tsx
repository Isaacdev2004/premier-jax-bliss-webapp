
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Navbar />
      <main className="flex-grow w-full">
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
  );
};

export default Layout;
