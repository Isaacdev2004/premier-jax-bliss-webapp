
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react';
import { ThemeProvider } from 'next-themes'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light">
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </ThemeProvider>
);
