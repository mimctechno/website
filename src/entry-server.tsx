// src/entry-server.tsx
// Server-side render entry point for static pre-generation.
// Uses StaticRouter (from react-router-dom/server) so each URL is rendered
// with the correct route matched — no BrowserRouter needed on the server.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
// (lazy() does not work with renderToString without a streaming setup, so we import directly)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import WhatsAppAPI from "./pages/services/WhatsAppAPI";
import TallyIntegration from "./pages/services/TallyIntegration";
import ERPCRM from "./pages/services/ERPCRM";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import EnterpriseConsulting from "./pages/services/EnterpriseConsulting";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
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
      </StaticRouter>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  return { html, helmet };
}
