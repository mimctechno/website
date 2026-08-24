"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

const allServices = [
  {
    id: "whatsapp-api",
    title: "Official Meta WhatsApp API",
    tagline: "High-volume broadcast & webhook automation",
    path: "/services/whatsapp-api",
    tag: "Partner",
  },
  {
    id: "tally-integration",
    title: "Tally ERP WhatsApp Sync",
    tagline: "Instant encrypted PDF invoice dispatches",
    path: "/services/tally-whatsapp-integration",
    tag: "Connector",
  },
  {
    id: "erp-crm",
    title: "Enterprise ERP & CRM",
    tagline: "Multi-branch resource planning & pipelines",
    path: "/services/erp-crm",
    tag: "Mission Critical",
  },
  {
    id: "web-development",
    title: "Modern Web & Edge Cloud",
    tagline: "Sub-second Next.js conversion architecture",
    path: "/services/web-development",
    tag: "Full Stack",
  },
  {
    id: "digital-marketing",
    title: "Technical SEO & Growth",
    tagline: "Programmatic search ranking domination",
    path: "/services/digital-marketing",
    tag: "Revenue",
  },
  {
    id: "enterprise-consulting",
    title: "IT Architecture Consulting",
    tagline: "Strategy, system audits & zero lock-in",
    path: "/services/enterprise-consulting",
    tag: "Advisory",
  },
];

export default function RelatedServices({ currentId }: { currentId: string }) {
  const related = allServices.filter((s) => s.id !== currentId).slice(0, 3);

  return (
    <section className="mt-20 pt-12 border-t border-[#E8E8E2]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
            [ ECOSYSTEM ]
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#171717]">
            Complementary Enterprise Architectures
          </h2>
        </div>
        <Link
          href="/services"
          className="mt-2 sm:mt-0 text-xs font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
        >
          <span>All Capabilities</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((service) => (
          <Link
            key={service.id}
            href={service.path}
            className="precision-card rounded-2xl p-6 flex flex-col justify-between group block"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/50 inline-block mb-3">
                {service.tag}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#171717] group-hover:text-teal-800 transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {service.tagline}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E8E2] mt-4 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-900">
              <span>View Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
