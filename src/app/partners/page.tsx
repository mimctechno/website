import type { Metadata } from "next";
import Partners from "@/views/Partners";

export const metadata: Metadata = {
  title: "Infrastructure & Technology Partners",
  description: "Explore MIMC Technologies' global infrastructure partners including AWS, Vercel, Cloudflare, and OpenAI. We leverage enterprise-grade tech to build secure, scalable solutions.",
  alternates: { canonical: "https://www.mimctechnologies.com/partners" },
  openGraph: { url: "https://www.mimctechnologies.com/partners" },
};

export default function Page() { return <Partners />; }
