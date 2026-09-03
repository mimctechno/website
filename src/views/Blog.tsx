"use client";

import { useState, useMemo } from "react";
import {
  ArrowRight,
  Clock,
  Tag,
  Search,
  Sparkles,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";
import { posts, type Post } from "../data/posts";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MIMC Technologies Engineering & Enterprise Blog",
  description:
    "Technical insights, implementation blueprints, and guides on ERP software, Meta WhatsApp API, and Tally integration.",
  url: "https://www.mimctechnologies.com/blog",
};

const CATEGORIES = [
  "All Insights",
  "WhatsApp API",
  "Tally Integration",
  "ERP & CRM",
  "Web & Cloud",
  "SEO & Growth",
  "Advisory",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Insights" ||
        post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout
      title="Engineering Insights & Enterprise Software Blog | MIMC Technologies"
      description="In-depth guides on Meta WhatsApp Business API, Tally ERP automation, custom ERP architecture, and conversion engineering from MIMC architects."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HEADER ===================== */}
        <section className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            ENGINEERING KNOWLEDGE BASE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4">
            Architecture Blueprints & <br />
            <span className="text-teal-700">Enterprise Software Insights.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Written by senior architects who design, deploy, and scale
            enterprise ERP platforms, Meta WhatsApp API pipelines, and automated
            accounting bridges daily.
          </p>
        </section>

        {/* ===================== FILTER & SEARCH BAR ===================== */}
        <section className="mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-y border-[#E8E8E2] py-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#E8E8E2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blueprints & guides..."
              className="w-full bg-white border border-[#E8E8E2] rounded-xl pl-9 pr-4 py-2 text-xs text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 transition-all"
            />
          </div>
        </section>

        {/* ===================== FEATURED POST ===================== */}
        {featuredPost && (
          <section className="mb-14">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="precision-card rounded-3xl p-6 sm:p-10 block group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Cover Image */}
                <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 border border-[#E8E8E2] relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={1200}
                    height={750}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-teal-800 border border-[#E8E8E2] uppercase tracking-wider">
                    FEATURED BLUEPRINT
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/50">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] group-hover:text-teal-800 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>

                  <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs font-bold text-teal-700 group-hover:text-teal-900 inline-flex items-center gap-1">
                      <span>Read Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ===================== ARTICLES GRID ===================== */}
        {remainingPosts.length > 0 && (
          <section className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
                [ ALL PUBLICATIONS ]
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {filteredPosts.length} Articles Total
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="precision-card rounded-2xl p-6 flex flex-col justify-between group block"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="rounded-xl overflow-hidden aspect-[16/9] bg-neutral-100 border border-[#E8E8E2] mb-5 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={675}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/50">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#171717] group-hover:text-teal-800 transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-400 text-[11px]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="font-bold text-teal-700 group-hover:text-teal-900 inline-flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===================== TOPICS CLOUD ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-teal-700" />
            <h3 className="font-heading font-bold text-base text-[#171717]">
              Explore Topics & Tags
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(posts.flatMap((p) => p.tags))).map((tag) => (
              <span
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="text-xs font-mono bg-[#FAFAF8] hover:bg-teal-50 hover:text-teal-800 border border-[#E8E8E2] hover:border-teal-300 px-3 py-1.5 rounded-lg text-neutral-600 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ IMPLEMENTATION SUPPORT ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Ready to Implement What You've Read?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              Our engineering team builds and integrates these architectures
              directly for your business. Book a discovery session today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Schedule Architect Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-sm border border-neutral-700 transition-all"
              >
                <span>All Capabilities</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
