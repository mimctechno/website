import Layout from "../components/Layout";
import { Shield } from "lucide-react";

export default function Privacy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — MIMC Technologies",
    description:
      "MIMC Technologies privacy policy covering data collection, WhatsApp API data handling, security protocols, and GDPR compliance for enterprise clients.",
    url: "https://www.mimctechnologies.com/privacy",
    inLanguage: "en",
    isPartOf: { "@id": "https://www.mimctechnologies.com" },
  };

  return (
    <Layout
      title="Privacy Policy"
      description="MIMC Technologies privacy policy covering data collection, WhatsApp API data handling, security protocols, and GDPR compliance for enterprise clients."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 border-b border-[var(--color-cyber-border)] pb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[var(--color-cyber-accent)]" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white">
              PRIVACY POLICY
            </h1>
          </div>
          <p className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest">
            Last Updated: July 2026 | SYS.VER.9.4
          </p>
        </div>

        <article className="prose prose-invert prose-p:text-[var(--color-cyber-muted-fg)] prose-p:font-[var(--font-cyber-accent)] prose-p:uppercase prose-p:tracking-wider prose-p:text-sm prose-p:leading-relaxed prose-headings:font-[var(--font-cyber-head)] prose-headings:text-white prose-headings:uppercase prose-headings:tracking-widest max-w-none">
          <h3>1. Data Collection & Processing</h3>
          <p>
            MIMC Technologies ("we," "us," or "our") collects information
            necessary to provide enterprise IT services, ERP solutions, and
            WhatsApp API integrations. When you use our website or contact us,
            we may collect your name, company name, email address, phone number,
            and technical specifications related to your project inquiries.
          </p>

          <h3>2. WhatsApp Business API Data</h3>
          <p>
            As a provider of WhatsApp Business API integrations, we act as a
            data processor for the messages transmitted through our
            infrastructure. We do not use, sell, or analyze the content of your
            messages. All data transmitted through the Meta/WhatsApp network is
            subject to Meta's end-to-end encryption standards and their
            respective Privacy Policies.
          </p>

          <h3>3. Use of Information</h3>
          <p>
            We use the information we collect strictly to:
            <br />
            &gt; Provide, maintain, and improve our enterprise software
            solutions.
            <br />
            &gt; Process transactions and send related information (e.g.,
            invoices, API keys).
            <br />
            &gt; Respond to your technical support requests and consulting
            inquiries.
            <br />
            &gt; Send technical notices, security alerts, and administrative
            messages.
          </p>

          <h3>4. Data Security</h3>
          <p>
            We deploy strict security protocols to protect your data. All data
            in transit is encrypted via SSL/TLS. Our servers are protected by
            enterprise-grade firewalls and access control systems. However, no
            digital transmission is 100% secure, and we cannot guarantee
            absolute security of data transmitted over the public internet.
          </p>

          <h3>5. Cookies and Tracking</h3>
          <p>
            Our website uses minimal cookies necessary for core functionality
            and analytics (such as tracking Core Web Vitals and site
            performance). We do not use intrusive third-party advertising
            trackers on our corporate platform.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            For any privacy-related questions, data deletion requests, or
            compliance inquiries (including GDPR), please contact our security
            team at:
            <br />
            <br />
            <strong>Email:</strong> info@mimctechnologies.com
            <br />
            <strong>Subject:</strong> Privacy / Data Compliance
          </p>
        </article>
      </div>
    </Layout>
  );
}
