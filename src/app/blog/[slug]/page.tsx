// src/app/blog/[slug]/page.tsx
// Dynamic blog post route — generates one static HTML per post at build time.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPost from "@/views/BlogPost";

type Props = { params: Promise<{ slug: string }> };

// generateStaticParams tells Next.js which slugs to pre-build.
// This is the proper replacement for the old prerender.js blog routes.
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const url = `https://www.mimctechnologies.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["MIMC Technologies"],
      tags: post.tags,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogPost params={params} />;
}
