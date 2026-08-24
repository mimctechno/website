import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JOBS } from "@/data/jobs";
import JobDetail from "@/views/JobDetail";

export function generateStaticParams() {
  return JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};

  const title = `${job.title} — Careers | MIMC Technologies`;
  const description = job.summary;
  const url = `https://www.mimctechnologies.com/careers/${job.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();

  return <JobDetail job={job} />;
}
