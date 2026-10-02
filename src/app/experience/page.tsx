import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Peter Lutanywa's (MPLutanywa) professional journey, technical experience in full-stack development, and systems engineering.",
};

interface TimelineItem {
  period: string;
  role: string;
  companyOrContext: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const EXPERIENCES: TimelineItem[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack Web Developer",
    companyOrContext: "Independent Software & Client Solutions",
    description:
      "Architecting and shipping production-grade full-stack web applications with Python/Django backends and Next.js/React frontends.",
    highlights: [
      "Built resilient RESTful API layers with custom authentication, permission controls, and relational database schemas.",
      "Engineered responsive, accessible frontends using Next.js 15 (App Router), TypeScript, and Tailwind CSS.",
      "Optimized Core Web Vitals and page load times by leveraging server components and dynamic imports.",
    ],
    tags: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    period: "2023 — Present",
    role: "Network & Systems Engineering",
    companyOrContext: "Infrastructure & Systems Operations",
    description:
      "Administering local and cloud systems, diagnosing network latency issues, and deploying server services.",
    highlights: [
      "Designed and tested custom Python network diagnostics tools analyzing throughput, round-trip time (RTT), and connectivity.",
      "Configured Linux environments, SSH keys, automated bash scripts, and reverse proxy routing via Nginx.",
      "Troubleshot TCP/IP and DNS issues across heterogeneous subnet environments.",
    ],
    tags: ["Networking", "Linux", "Python", "TCP/IP", "DNS", "Nginx"],
  },
  {
    period: "2022 — 2023",
    role: "Software Engineering & Foundations",
    companyOrContext: "Core Development & Open Source",
    description:
      "Deep dive into software engineering principles, algorithms, data structures, and database management.",
    highlights: [
      "Mastered relational databases (PostgreSQL, SQLite) and object-relational mapping (Django ORM).",
      "Built diverse portfolio applications to cement full-stack and networking skills.",
      "Emphasized clean code principles, version control with Git/GitHub, and modular software design.",
    ],
    tags: ["Python", "Git", "SQL", "REST APIs", "Clean Code"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-14">
        <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
          Career &amp; Milestones
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Experience
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
          A track record of translating complex backend requirements and networking knowledge into cohesive software products.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 ml-4 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-10">
            {/* Timeline bullet */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-600"></div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <h2 className="text-xl font-bold text-slate-900">{exp.role}</h2>
                <span className="text-xs font-mono font-semibold text-cyan-900 bg-cyan-100/70 border border-cyan-200 px-2.5 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-700 mb-3">
                {exp.companyOrContext}
              </p>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-5">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-cyan-700 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-md bg-gray-100 text-slate-700 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-300 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/skills"
          className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors"
        >
          ← Review Skills &amp; Stack
        </Link>
        <Link
          href="/projects"
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium shadow-xs transition-colors"
        >
          Explore Projects →
        </Link>
      </div>
    </div>
  );
}
