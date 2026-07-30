import Layout from "../components/Layout";
import { Terminal } from "lucide-react";

export default function Terms() {
  return (
    <Layout title="Terms of Service — MIMC Technologies">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 border-b border-[var(--color-cyber-border)] pb-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-[var(--color-cyber-accent)]" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white">
              TERMS OF SERVICE
            </h1>
          </div>
          <p className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest">
            Last Updated: July 2026 | SYS.VER.9.4
          </p>
        </div>

        <article className="prose prose-invert prose-p:text-[var(--color-cyber-muted-fg)] prose-p:font-[var(--font-cyber-accent)] prose-p:uppercase prose-p:tracking-wider prose-p:text-sm prose-p:leading-relaxed prose-headings:font-[var(--font-cyber-head)] prose-headings:text-white prose-headings:uppercase prose-headings:tracking-widest max-w-none">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing the website of MIMC Technologies or utilizing our
            enterprise software, ERP, or API integration services, you agree to
            be bound by these Terms of Service. If you do not agree with any
            part of these terms, you must not use our services.
          </p>

          <h3>2. Enterprise Software & API Services</h3>
          <p>
            MIMC Technologies provides custom software, Tally integrations, and
            WhatsApp Business API services. All software deployed remains the
            intellectual property of MIMC Technologies unless explicitly
            transferred under a custom Master Services Agreement (MSA). Clients
            are granted a non-exclusive license to use the software for their
            internal business operations.
          </p>

          <h3>3. WhatsApp Compliance</h3>
          <p>
            Clients utilizing our WhatsApp Business API integration (including
            Tally-to-WhatsApp automation) must strictly adhere to Meta's
            WhatsApp Commerce and Business Policies. MIMC Technologies reserves
            the right to suspend API access immediately if a client engages in
            spam, sends prohibited content, or violates Meta's Terms of Service,
            which could jeopardize our BSP infrastructure.
          </p>

          <h3>4. Uptime & SLAs</h3>
          <p>
            While we strive for 99.9% uptime on hosted infrastructure, MIMC
            Technologies is not liable for downtime caused by third-party
            providers (such as AWS, Meta, or Tally Solutions). Specific SLA
            guarantees and compensation for downtime are governed exclusively by
            your individual MSA.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall MIMC Technologies, its directors, or employees be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including loss of profits, data, or business
            opportunities arising out of the use or inability to use our
            software or services.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of Ontario, Canada, and/or Delhi, India, depending on the
            contracting entity. Any disputes shall be subject to the exclusive
            jurisdiction of the courts in the respective regions.
          </p>
        </article>
      </div>
    </Layout>
  );
}
