export interface JobSalary {
  currency: string;
  minValue?: number;
  maxValue?: number;
  value?: number;
  unitText: "MONTH" | "HOUR" | "YEAR";
}

export interface JobLocationData {
  isRemote: boolean;
  country: string; // ISO 3166-1 alpha-2 e.g. "IN", "CA"
  countryName: string; // e.g. "India", "Canada"
  locality?: string; // e.g. "Toronto"
  region?: string; // e.g. "ON"
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";
  experience: string;
  compensation: string;
  salary: JobSalary;
  locationData: JobLocationData;
  datePosted: string;
  validThrough: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export function generateJobPostingSchema(job: Job) {
  const schema: Record<string, unknown> = {
    "@type": "JobPosting",
    title: job.title,
    description: `
      <p>${job.summary}</p>
      <h3>Key Responsibilities</h3>
      <ul>
        ${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}
      </ul>
      <h3>Qualifications & Requirements</h3>
      <ul>
        ${job.requirements.map((req) => `<li>${req}</li>`).join("")}
      </ul>
      <h3>Benefits & What We Offer</h3>
      <ul>
        ${job.benefits.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    `.trim(),
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "MIMC Technologies",
      sameAs: "https://www.mimctechnologies.com",
      logo: "https://www.mimctechnologies.com/logo.webp",
    },
    directApply: true,
    url: `https://www.mimctechnologies.com/careers/${job.slug}/`,
  };

  // Base Salary Structured Data (fixes "Missing field 'baseSalary'")
  if (job.salary) {
    const salaryVal: Record<string, unknown> = {
      "@type": "QuantitativeValue",
      unitText: job.salary.unitText,
    };
    if (job.salary.value !== undefined) {
      salaryVal.value = job.salary.value;
    }
    if (job.salary.minValue !== undefined) {
      salaryVal.minValue = job.salary.minValue;
    }
    if (job.salary.maxValue !== undefined) {
      salaryVal.maxValue = job.salary.maxValue;
    }

    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: job.salary.currency,
      value: salaryVal,
    };
  }

  // Location Structured Data (fixes "Missing field 'applicantLocationRequirements'" & "Missing field 'jobLocation'")
  if (job.locationData.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: job.locationData.country,
    };
    schema.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: job.locationData.country,
      },
    };
  } else {
    schema.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...(job.locationData.locality
          ? { addressLocality: job.locationData.locality }
          : {}),
        ...(job.locationData.region
          ? { addressRegion: job.locationData.region }
          : {}),
        addressCountry: job.locationData.country,
      },
    };
  }

  return schema;
}

export const JOBS: Job[] = [
  {
    id: "MKT-011",
    slug: "google-seo-consultant",
    title: "Google SEO Consultant",
    department: "Digital Marketing & SEO",
    location: "India (Remote)",
    type: "Full-Time",
    employmentType: "FULL_TIME",
    experience: "2+ Years",
    compensation: "₹30,000 – ₹50,000 / month",
    salary: {
      currency: "INR",
      minValue: 30000,
      maxValue: 50000,
      unitText: "MONTH",
    },
    locationData: {
      isRemote: true,
      country: "IN",
      countryName: "India",
    },
    datePosted: "2026-09-01",
    validThrough: "2027-06-30",
    summary:
      "We are seeking an experienced Google SEO Consultant to lead technical SEO audits, keyword research, on-page optimization, backlink strategies, and organic search ranking growth across our web applications and digital platforms.",
    responsibilities: [
      "Conduct comprehensive technical SEO audits (Core Web Vitals, crawlability, indexing, structured data, canonicalization).",
      "Perform deep keyword research, competitor gap analysis, and develop high-converting search strategy roadmaps.",
      "Optimize on-page metadata, semantic HTML hierarchy, internal linking architecture, and content clusters.",
      "Track organic performance, keyword rankings, and user behavior via Google Search Console and GA4.",
      "Implement ethical, high-authority link-building campaigns and local/international SEO tactics.",
    ],
    requirements: [
      "2+ years of hands-on experience in organic search engine optimization and Google Search ranking algorithms.",
      "Proficiency with SEO tools like Ahrefs, SEMrush, Screaming Frog, Google Search Console, and Google Analytics 4.",
      "Solid understanding of technical SEO, structured data (Schema.org / JSON-LD), and web performance metrics.",
      "Proven track record of driving measurable organic traffic and conversion growth.",
      "Strong analytical mindset and clear written communication in a remote work environment.",
    ],
    benefits: [
      "100% remote work flexibility across India.",
      "Competitive monthly compensation (₹30,000 – ₹50,000) with performance incentives.",
      "Access to premium industry SEO tools, datasets, and enterprise software.",
      "Collaborative team culture with opportunities for rapid leadership advancement.",
    ],
  },
  {
    id: "MKT-022",
    slug: "social-media-handling-internship",
    title: "Social Media Handling & Content Marketing Intern",
    department: "Marketing & Growth",
    location: "India (Remote)",
    type: "Internship",
    employmentType: "INTERN",
    experience: "Freshers / College Students",
    compensation: "₹15,000 / month",
    salary: {
      currency: "INR",
      value: 15000,
      unitText: "MONTH",
    },
    locationData: {
      isRemote: true,
      country: "IN",
      countryName: "India",
    },
    datePosted: "2026-09-01",
    validThrough: "2027-06-30",
    summary:
      "Join our dynamic growth team as a Social Media Intern to handle daily social channels (LinkedIn, Twitter/X, Instagram, YouTube), create engaging visual and written content, foster community engagement, and amplify brand presence.",
    responsibilities: [
      "Manage daily social media posting, calendar scheduling, and copy across LinkedIn, Twitter/X, and Instagram.",
      "Draft engaging social posts, carousels, infographics, and short-form video scripts.",
      "Engage with industry communities, reply to comments, monitor mentions, and participate in relevant discussions.",
      "Collaborate with design and marketing leads to create visual assets using Canva, Figma, or similar tools.",
      "Track engagement metrics, follower growth, and audience insights to optimize future campaign strategies.",
    ],
    requirements: [
      "Strong passion for social media trends, content creation, and digital brand building.",
      "Excellent written English skills with a knack for crafting punchy hooks and compelling captions.",
      "Familiarity with Canva, basic design tools, and social scheduling platforms.",
      "Proactive, creative thinker with enthusiasm to learn and experiment with new formats.",
      "Currently enrolled in college or a recent graduate available for a remote internship in India.",
    ],
    benefits: [
      "Monthly stipend of ₹15,000 with flexible remote work from anywhere in India.",
      "Hands-on mentorship from senior marketing leaders and industry practitioners.",
      "Official internship certificate and strong recommendation letter upon completion.",
      "High-performing interns will be considered for a full-time permanent role.",
    ],
  },
  {
    id: "SLS-033",
    slug: "sales-consultant-toronto",
    title: "B2B Sales Consultant",
    department: "Sales & Business Development",
    location: "Toronto, Canada",
    type: "Full-Time / Part-Time",
    employmentType: "FULL_TIME",
    experience: "1+ Years",
    compensation: "$20 – $40 CAD / hour",
    salary: {
      currency: "CAD",
      minValue: 20,
      maxValue: 40,
      unitText: "HOUR",
    },
    locationData: {
      isRemote: false,
      country: "CA",
      countryName: "Canada",
      locality: "Toronto",
      region: "ON",
    },
    datePosted: "2026-09-01",
    validThrough: "2027-06-30",
    summary:
      "We are hiring an energetic and results-driven Sales Consultant based in Toronto, Canada to conduct outreach, qualify prospective B2B clients, present our digital solutions & IT services, and accelerate business growth.",
    responsibilities: [
      "Identify, prospect, and engage prospective mid-market and enterprise clients across the Greater Toronto Area (GTA) and Canada.",
      "Conduct outbound discovery calls, emails, and LinkedIn messaging to qualify sales leads.",
      "Deliver concise presentations demonstrating MIMC Technologies' IT consulting, custom software, and digital solutions.",
      "Maintain accurate deal pipelines, contact logs, and follow-ups in the CRM.",
      "Collaborate closely with technical and management teams to negotiate proposals and close deals.",
    ],
    requirements: [
      "1+ years of experience in sales, business development, retail consulting, or customer-facing client advisory.",
      "Based in Toronto / GTA with legal authorization to work in Canada.",
      "Outstanding verbal communication, interpersonal skills, and professional phone/meeting presence.",
      "Self-starter attitude with goal-oriented discipline and competitive drive.",
      "Familiarity with CRM tools, sales outreach techniques, and tech/IT service terminology is a plus.",
    ],
    benefits: [
      "$20 – $40 CAD / hour base pay plus performance commissions on closed business deals.",
      "Prime Toronto location with hybrid flexibility.",
      "Comprehensive sales training and continuous professional development.",
      "Opportunity to advance rapidly into senior account executive or enterprise sales roles.",
    ],
  },
];
