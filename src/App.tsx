import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const InternalMedicine = lazy(() => import("./pages/InternalMedicine"));
const MedSpa = lazy(() => import("./pages/MedSpa"));
const PatientResources = lazy(() => import("./pages/PatientResources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MedSpaSkinRejuvenation = lazy(() => import("./pages/MedSpaSkinRejuvenation"));

// Admin portal pages
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminMessages = lazy(() => import("./pages/admin/Messages"));
const AdminBookings = lazy(() => import("./pages/admin/Bookings"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <Home />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <About />
              </Suspense>
            } />
            <Route path="internal-medicine" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <InternalMedicine />
              </Suspense>
            } />
            <Route path="med-spa" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <MedSpa />
              </Suspense>
            } />
            <Route path="med-spa/skin-rejuvenation" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <MedSpaSkinRejuvenation />
              </Suspense>
            } />
            <Route path="patient-resources" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <PatientResources />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <Contact />
              </Suspense>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <AdminLogin />
            </Suspense>
          } />
          <Route path="/admin" element={
            <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
              <AdminLayout />
            </Suspense>
          }>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <AdminDashboard />
              </Suspense>
            } />
            <Route path="messages" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <AdminMessages />
              </Suspense>
            } />
            <Route path="bookings" element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <AdminBookings />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
