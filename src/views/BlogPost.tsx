"use client";

import {
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Share2,
  CheckCircle2,
  User,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../components/Layout";
import { posts } from "../data/posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const idx = posts.indexOf(post);
  const prev = posts[idx + 1] ?? null;
  const next = posts[idx - 1] ?? null;

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
      title={`${post.title} | MIMC Insights`}
      description={post.description}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-teal-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Blueprints</span>
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.15] mb-6 font-heading">
            {post.title}
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed border-l-2 border-teal-600 pl-4">
            {post.description}
          </p>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            <article className="space-y-10">
              {post.sections.map((section, i) => (
                <section
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs"
                >
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] mb-4 flex items-baseline gap-3">
                    <span className="font-mono text-teal-700 text-base sm:text-lg font-bold">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{section.heading}</span>
                  </h2>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                </section>
              ))}
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

            {/* In-Article CTA Card */}
            <div className="p-8 rounded-3xl bg-[#111111] text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>EXPERT IMPLEMENTATION SERVICE</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Need Help Deploying This Architecture?
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Our senior software architects handle complete end-to-end
                implementation — from custom ERP development to Meta WhatsApp
                API and Tally bridges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Schedule Free Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Table of Contents */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] sticky top-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 pb-2 border-b border-[#E8E8E2]">
                <BookOpen className="w-4 h-4" />
                <span>CHAPTER OUTLINE</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                {post.sections.map((s, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start gap-2 text-neutral-600"
                  >
                    <span className="font-mono text-teal-700 font-bold shrink-0">
                      {String(sIdx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{s.heading}</span>
                  </li>
                ))}
              </ul>

              {/* Author Card */}
              <div className="pt-4 border-t border-[#E8E8E2]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 font-bold text-xs font-heading">
                    MIMC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171717]">
                      Architecture Team
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      MIMC Technologies
                    </div>
                  </div>
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
                <span>NEWER ARTICLE</span>
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
                <span>OLDER ARTICLE</span>
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
