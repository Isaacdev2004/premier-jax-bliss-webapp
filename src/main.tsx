
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react';
import { ThemeProvider } from 'next-themes'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light">
    <HelmetProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </HelmetProvider>
  </ThemeProvider>
);
