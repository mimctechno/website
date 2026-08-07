// src/app/blog/[slug]/page.tsx
// Dynamic blog post route — generates one static HTML per post at build time.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPost from "@/views/BlogPost";

type Props = { params: { slug: string } };

// generateStaticParams tells Next.js which slugs to pre-build.
// This is the proper replacement for the old prerender.js blog routes.
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const url = `https://www.mimctechnologies.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: post.image ? [{ url: `https://www.mimctechnologies.com${post.image}` }] : undefined,
    },
  };
}

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogPost params={params} />;
}
