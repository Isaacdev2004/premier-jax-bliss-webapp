
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-2">
        <div className="content-section animate-slide-in">
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
