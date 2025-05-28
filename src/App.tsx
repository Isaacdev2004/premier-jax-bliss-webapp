
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const InternalMedicine = lazy(() => import("./pages/InternalMedicine"));
const MedSpa = lazy(() => import("./pages/MedSpa"));
const PatientResources = lazy(() => import("./pages/PatientResources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MedSpaSkinRejuvenation = lazy(() => import("./pages/MedSpaSkinRejuvenation"));
const MedSpaAcneTreatment = lazy(() => import("./pages/MedSpaAcneTreatment"));
const MedSpaBotoxInjections = lazy(() => import("./pages/MedSpaBotoxInjections"));
const MedSpaPersonalizedRejuvenation = lazy(() => import("./pages/MedSpaPersonalizedRejuvenation"));
const MedSpaWellness = lazy(() => import("./pages/MedSpaWellness"));

// Lazy load admin pages
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminMessages = lazy(() => import("./pages/admin/Messages"));
const AdminBookings = lazy(() => import("./pages/admin/Bookings"));
const AdminNotifications = lazy(() => import("./pages/admin/Notifications"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-muted mb-4"></div>
            <div className="h-4 w-32 bg-muted rounded mb-3"></div>
            <div className="h-3 w-24 bg-muted rounded"></div>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="internal-medicine" element={<InternalMedicine />} />
            <Route path="med-spa" element={<MedSpa />} />
            <Route path="med-spa/skin-rejuvenation" element={<MedSpaSkinRejuvenation />} />
            <Route path="med-spa/acne-treatment" element={<MedSpaAcneTreatment />} />
            <Route path="med-spa/botox-injections" element={<MedSpaBotoxInjections />} />
            <Route path="med-spa/personalized-rejuvenation" element={<MedSpaPersonalizedRejuvenation />} />
            <Route path="med-spa/wellness" element={<MedSpaWellness />} />
            <Route path="patient-resources" element={<PatientResources />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="notifications" element={<AdminNotifications />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
