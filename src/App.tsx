import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading all route components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const WhatsAppAPI = lazy(() => import("./pages/services/WhatsAppAPI"));
const TallyIntegration = lazy(
  () => import("./pages/services/TallyIntegration"),
);
const ERPCRM = lazy(() => import("./pages/services/ERPCRM"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const DigitalMarketing = lazy(
  () => import("./pages/services/DigitalMarketing"),
);
const EnterpriseConsulting = lazy(
  () => import("./pages/services/EnterpriseConsulting"),
);
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Careers = lazy(() => import("./pages/Careers"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// A simple cyberpunk-themed loading fallback for Suspense
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-xs animate-pulse">
      &gt; INITIALIZING_MODULE...
    </div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/whatsapp-api" element={<WhatsAppAPI />} />
            <Route
              path="/services/tally-whatsapp-integration"
              element={<TallyIntegration />}
            />
            <Route path="/services/erp-crm" element={<ERPCRM />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/services/enterprise-consulting"
              element={<EnterpriseConsulting />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  );
}
