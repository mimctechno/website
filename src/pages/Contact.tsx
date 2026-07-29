import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Terminal,
  CheckCircle,
  X,
} from "lucide-react";
import Layout from "../components/Layout";

const contactMethods = [
  {
    icon: Phone,
    label: "Canada Office",
    value: "+1 416-857-8831",
    href: "tel:+14168578831",
  },
  {
    icon: Phone,
    label: "India Office",
    value: "+91 925941-8994",
    href: "tel:+919259418994",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@mimctechnologies.com",
    href: "mailto:info@mimctechnologies.com",
  },
  { icon: Clock, label: "Response Time", value: "Within 24 Hours", href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formsubmit.co/ajax/info@mimctechnologies.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MIMC Technologies",
    url: "https://www.mimctechnologies.com/contact",
    description:
      "Contact MIMC Technologies for ERP, CRM, WhatsApp API, and Tally integration enquiries.",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    email: "info@mimctechnologies.com",
    telephone: ["+14168578831", "+919259418994"],
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "CA",
        addressRegion: "Ontario",
      },
      { "@type": "PostalAddress", addressCountry: "IN" },
    ],
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with MIMC Technologies. Offices in Canada and India. We respond within 24 hours for ERP, CRM, WhatsApp API, and Tally integration enquiries."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="mb-20 text-center">
          <div className="inline-block border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10 mb-8">
            <span className="animate-blink mr-2">_</span> OPEN_CHANNEL
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white mb-6">
            LET'S{" "}
            <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] via-[var(--color-cyber-accent3)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">
              CONNECT
            </span>
          </h1>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-sm max-w-xl mx-auto">
            Ready to deploy enterprise software or automate with WhatsApp? Send
            us a message and we'll get back to you within 24 hours.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 border-b border-[var(--color-cyber-border)] pb-4 mb-8">
              <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
                &gt;&gt; COMM_NODES
              </span>
            </div>

            {contactMethods.map((m) => (
              <div
                key={m.label}
                className="p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors duration-300 group"
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-6 flex items-start gap-4">
                  <div className="w-12 h-12 border border-[var(--color-cyber-border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-cyber-accent)] group-hover:cyber-glow transition-all bg-black">
                    <m.icon
                      className="w-5 h-5 text-[var(--color-cyber-muted-fg)] group-hover:text-[var(--color-cyber-accent)] transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)] mb-1">
                      {m.label}
                    </div>
                    {m.href ? (
                      <a
                        href={m.href}
                        className="font-[var(--font-cyber-head)] text-white text-sm font-bold hover:text-[var(--color-cyber-accent)] transition-colors"
                      >
                        {m.value}
                      </a>
                    ) : (
                      <div className="font-[var(--font-cyber-head)] text-white text-sm font-bold">
                        {m.value}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp Quick Link */}
            <div className="p-[2px] cyber-chamfer bg-[#25D366]/30 hover:bg-[#25D366] transition-colors duration-300 group">
              <a
                href="https://wa.me/14168578831"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-cyber-card)] cyber-chamfer p-6 flex items-center gap-4 group-hover:bg-black block"
              >
                <div className="w-12 h-12 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#25D366] bg-black">
                  <MessageSquare
                    className="w-5 h-5 text-[#25D366]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)] mb-1">
                    WhatsApp (Fastest)
                  </div>
                  <div className="font-[var(--font-cyber-head)] text-white text-sm font-bold group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </div>
                </div>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-48 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <MapPin
                className="w-10 h-10 text-[var(--color-cyber-accent)] opacity-50"
                strokeWidth={1}
              />
              <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center">
                [MAP EMBED PLACEHOLDER]
                <br />
                Canada &amp; India
              </p>
            </div>
          </div>

          {/* Right: FormSubmit Form */}
          <div className="lg:col-span-3">
            <div className="p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)]">
              <div className="bg-[var(--color-cyber-card)] cyber-chamfer-reverse p-8 md:p-12">
                <div className="flex items-center gap-3 mb-10 border-b border-[var(--color-cyber-border)] pb-6">
                  <Terminal className="w-5 h-5 text-[var(--color-cyber-accent)]" />
                  <span className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest text-[var(--color-cyber-accent)]">
                    INIT_MESSAGE_PROTOCOL
                  </span>
                </div>

                {/*
                  FormSubmit.co — no backend needed.
                  Replace EMAIL_PLACEHOLDER with info@mimctechnologies.com after first submission activates it.
                  https://formsubmit.co/
                */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* FormSubmit AJAX config */}
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New enquiry from mimctechnologies.com"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b-2 border-[var(--color-cyber-border)] py-3 font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-cyber-accent)] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b-2 border-[var(--color-cyber-border)] py-3 font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-cyber-accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      className="w-full bg-transparent border-b-2 border-[var(--color-cyber-border)] py-3 font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-cyber-accent)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full bg-[var(--color-cyber-card)] border-b-2 border-[var(--color-cyber-border)] py-3 font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-white focus:outline-none focus:border-[var(--color-cyber-accent)] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="ERP / CRM">ERP / CRM Solutions</option>
                      <option value="WhatsApp API">
                        WhatsApp Business API
                      </option>
                      <option value="Tally Integration">
                        Tally WhatsApp Integration
                      </option>
                      <option value="Web Development">
                        Web Development & SEO
                      </option>
                      <option value="Other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent border-b-2 border-[var(--color-cyber-border)] py-3 font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-cyber-accent)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] hover:cyber-glow transition-all duration-300 px-8 py-5 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "TRANSMITTING..." : "TRANSMIT_MESSAGE >>"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank-you Modal */}
      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="relative max-w-lg w-full p-[2px] cyber-chamfer"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyber-accent), var(--color-cyber-accent2))",
            }}
          >
            <div className="bg-[var(--color-cyber-bg)] cyber-chamfer p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-cyber-accent)]/10 blur-[80px]" />
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-4 right-4 text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <CheckCircle
                className="w-16 h-16 text-[var(--color-cyber-accent)] mx-auto mb-6"
                strokeWidth={1.5}
              />
              <div className="inline-block border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest mb-6">
                TRANSMISSION_RECEIVED
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-4">
                MESSAGE
                <br />
                <span className="text-[var(--color-cyber-accent)]">SENT!</span>
              </h2>
              <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-sm leading-relaxed">
                Thank you for reaching out. Our team will respond to you within
                24 hours at the email address provided.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-8 py-3 text-sm"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
