
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Skeleton } from "./components/ui/skeleton";

// Lazy load route components
const Home = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const InternalMedicine = lazy(() => import("./pages/InternalMedicine"));
const MedSpa = lazy(() => import("./pages/MedSpa"));
const PatientResources = lazy(() => import("./pages/PatientResources"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => (
  <div className="container mx-auto p-8">
    <Skeleton className="h-[200px] w-full rounded-xl mb-8" />
    <Skeleton className="h-[400px] w-full rounded-xl" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
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
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            } />
            <Route path="internal-medicine" element={
              <Suspense fallback={<Loading />}>
                <InternalMedicine />
              </Suspense>
            } />
            <Route path="med-spa" element={
              <Suspense fallback={<Loading />}>
                <MedSpa />
              </Suspense>
            } />
            <Route path="patient-resources" element={
              <Suspense fallback={<Loading />}>
                <PatientResources />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            } />
            <Route path="admin" element={
              <Suspense fallback={<Loading />}>
                <Admin />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
