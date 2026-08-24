"use client";

import {
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../components/Layout";
import { posts } from "../data/posts";

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const url = match[2];
      const isExternal =
        url.startsWith("http") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:");

      elements.push(
        isExternal ? (
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-900 underline underline-offset-3 font-semibold transition-colors"
          >
            {label}
          </a>
        ) : (
          <Link
            key={match.index}
            href={url}
            className="text-teal-700 hover:text-teal-900 underline underline-offset-3 font-semibold transition-colors"
          >
            {label}
          </Link>
        ),
      );
    } else if (match[3]) {
      elements.push(
        <strong key={match.index} className="font-semibold text-[#171717]">
          {match[3]}
        </strong>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

const CATEGORY_SERVICES: Record<
  string,
  { label: string; href: string; badge: string }
> = {
  "WhatsApp API": {
    label: "Official Meta WhatsApp Business API",
    href: "/services/whatsapp-api",
    badge: "RELATED SERVICE",
  },
  "Tally Integration": {
    label: "Automated Tally Prime WhatsApp Invoicing",
    href: "/services/tally-whatsapp-integration",
    badge: "RELATED SERVICE",
  },
  "ERP & CRM": {
    label: "Custom Enterprise ERP & CRM Software",
    href: "/services/erp-crm",
    badge: "RELATED SERVICE",
  },
  "Web & Cloud": {
    label: "High-Performance Next.js Web Development",
    href: "/services/web-development",
    badge: "RELATED SERVICE",
  },
  "SEO & Growth": {
    label: "Technical SEO & Programmatic Search Architecture",
    href: "/services/digital-marketing",
    badge: "RELATED SERVICE",
  },
  Advisory: {
    label: "Enterprise Architecture & System Modernization",
    href: "/services/enterprise-consulting",
    badge: "RELATED SERVICE",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const idx = posts.indexOf(post);
  const prev = posts[idx + 1] ?? null;
  const next = posts[idx - 1] ?? null;

  const relatedService = CATEGORY_SERVICES[post.category] || {
    label: "Explore All Software Capabilities",
    href: "/services",
    badge: "SOLUTION HUB",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image
      ? `https://www.mimctechnologies.com${post.image}`
      : "https://www.mimctechnologies.com/logo.webp",
    datePublished: `${post.date}T00:00:00+00:00`,
    dateModified: `${post.date}T00:00:00+00:00`,
    articleSection: post.category,
    wordCount: post.sections.reduce(
      (acc, s) => acc + s.body.split(" ").length,
      0,
    ),
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mimctechnologies.com/blog/${post.slug}`,
    },
    author: {
      "@type": "Organization",
      name: "MIMC Technologies Architecture Team",
      url: "https://www.mimctechnologies.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MIMC Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mimctechnologies.com/logo.webp",
      },
    },
    url: `https://www.mimctechnologies.com/blog/${post.slug}`,
  };

  return (
    <Layout
      title={`${post.title} | MIMC Engineering Blueprints`}
      description={post.description}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-teal-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Blueprints & Publications</span>
        </Link>

        {/* ===================== ARTICLE HEADER ===================== */}
        <header className="mb-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              {post.category}
            </span>
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.12] mb-6 font-heading">
            {post.title}
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed border-l-2 border-teal-600 pl-4 py-0.5">
            {post.description}
          </p>

          {/* Quick Related Capability Link */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E8E8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/50 mr-2">
                  {relatedService.badge}
                </span>
                <span className="text-xs font-bold text-[#171717] font-heading">
                  {relatedService.label}
                </span>
              </div>
            </div>
            <Link
              href={relatedService.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 font-mono uppercase tracking-wide shrink-0"
            >
              <span>View Production Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* ===================== COVER IMAGE ===================== */}
        <div className="w-full aspect-[21/9] max-h-[440px] rounded-3xl overflow-hidden bg-neutral-100 border border-[#E8E8E2] mb-12 shadow-sm relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===================== MAIN BODY + SIDEBAR ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            <article className="space-y-10">
              {post.sections.map((section, i) => {
                const paragraphs = section.body.split("\n\n").filter(Boolean);
                return (
                  <section
                    key={i}
                    className="p-6 sm:p-9 rounded-3xl bg-white border border-[#E8E8E2] shadow-2xs"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] mb-5 flex items-baseline gap-3">
                      <span className="font-mono text-teal-700 text-base sm:text-lg font-bold shrink-0">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span>{section.heading}</span>
                    </h2>

                    <div className="space-y-4">
                      {paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-neutral-700 text-sm sm:text-base leading-relaxed"
                        >
                          {parseInlineMarkdown(para)}
                        </p>
                      ))}
                    </div>
                  </section>
                );
              })}
            </article>

            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#E8E8E2]">
              <Tag className="w-4 h-4 text-teal-700 mr-1" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-[#FAFAF8] border border-[#E8E8E2] px-2.5 py-1 rounded-md text-neutral-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* In-Article Direct CTA Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>EXPERT IMPLEMENTATION SERVICE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Ready to Deploy This Production Architecture?
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Our senior software architects in Canada and India handle
                complete end-to-end implementation — from{" "}
                <Link
                  href="/services/whatsapp-api"
                  className="text-teal-300 underline"
                >
                  Official Meta WhatsApp API onboarding
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/tally-whatsapp-integration"
                  className="text-teal-300 underline"
                >
                  Tally Prime automated invoicing
                </Link>{" "}
                to{" "}
                <Link
                  href="/services/erp-crm"
                  className="text-teal-300 underline"
                >
                  custom enterprise ERP software
                </Link>{" "}
                with 100% source code ownership.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <span>Schedule Free Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-xs border border-neutral-700 transition-all"
                >
                  <span>View 100+ Global City Hubs</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Table of Contents */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E8E2] sticky top-28 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 pb-2 border-b border-[#E8E8E2]">
                <BookOpen className="w-4 h-4" />
                <span>CHAPTER OUTLINE</span>
              </div>
              <ul className="space-y-3 text-xs">
                {post.sections.map((s, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start gap-2.5 text-neutral-600"
                  >
                    <span className="font-mono text-teal-700 font-bold shrink-0 text-xs">
                      {String(sIdx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug font-medium text-neutral-800">
                      {s.heading}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Author & Verification Card */}
              <div className="pt-4 border-t border-[#E8E8E2] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 font-bold text-xs font-heading shrink-0 shadow-2xs">
                    MIMC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171717]">
                      Architecture Advisory Group
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      Toronto & Delhi Engineering Hubs
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] text-[11px] text-neutral-500 leading-tight">
                  ✓ Verified against Meta Cloud API, Tally Prime TDL, and
                  PostgreSQL enterprise deployment telemetry.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== NEXT / PREV NAVIGATION ===================== */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-10 border-t border-[#E8E8E2]">
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="precision-card rounded-2xl p-5 block group"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>NEWER PUBLICATION</span>
              </div>
              <div className="font-heading font-bold text-sm text-[#171717] group-hover:text-teal-800 transition-colors line-clamp-2">
                {next.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="precision-card rounded-2xl p-5 block group text-right"
            >
              <div className="flex items-center justify-end gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                <span>OLDER PUBLICATION</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-heading font-bold text-sm text-[#171717] group-hover:text-teal-800 transition-colors line-clamp-2">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </Layout>
  );
}
