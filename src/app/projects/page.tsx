import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Showcase of full-stack web applications, networking tools, and backend systems built by Peter Lutanywa (MPLutanywa).",
};

interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Completed" | "In Progress" | "Open Source";
}

const PROJECTS: Project[] = [
  {
    title: "Full-Stack Web Platform",
    category: "Full-Stack Application",
    description:
      "A complete web solution combining a Django REST Framework backend with a Next.js App Router frontend. Handles secure user sessions, dynamic data management, and relational database persistence.",
    features: [
      "Token-based authentication (JWT) and role-based route protection",
      "Dynamic client-side hydration with Next.js and Tailwind CSS",
      "Optimized PostgreSQL queries with Django ORM prefetching",
    ],
    techStack: ["Next.js", "React", "Django", "Python", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/lumap-svg",
    status: "Completed",
  },
  {
    title: "Network Diagnostics & Monitoring Utility",
    category: "Networking & Systems",
    description:
      "A lightweight Python utility designed to inspect socket connections, measure latency jitter, monitor packet delivery, and generate system health diagnostics.",
    features: [
      "Real-time socket connection probing and ping round-trip analysis",
      "Bandwidth throughput estimation and packet loss detection",
      "Structured CLI logging and JSON report export for telemetry",
    ],
    techStack: ["Python", "Sockets", "Networking Protocols", "Linux", "CLI"],
    githubUrl: "https://github.com/lumap-svg",
    status: "Completed",
  },
  {
    title: "Developer Portfolio & Showcase",
    category: "Frontend Engineering",
    description:
      "High-performance personal developer portfolio built with Next.js 15, Turbopack, and Tailwind CSS v4. Engineered for fast LCP, zero layout shifts, and accessible navigation.",
    features: [
      "Server components and client-side page routing",
      "Accessible interactive contact form with instant validation",
      "Fully responsive layout supporting mobile, tablet, and desktop views",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Turbopack"],
    githubUrl: "https://github.com/lumap-svg/MPlutanywa",
    status: "Completed",
  },
  {
    title: "Secure Authentication & API Microservice",
    category: "Backend Architecture",
    description:
      "A modular backend microservice providing authentication, account lifecycle management, rate limiting, and structured RESTful endpoints.",
    features: [
      "Fine-grained permissions and secure token refreshing mechanism",
      "Automated API documentation with OpenAPI / Swagger schema",
      "Database migration scripts and comprehensive unit tests",
    ],
    techStack: ["Django", "Django REST Framework", "Python", "SQLite / PostgreSQL"],
    githubUrl: "https://github.com/lumap-svg",
    status: "Open Source",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
          Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Featured Projects
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
          A showcase of systems, full-stack applications, and network utilities reflecting my hands-on problem solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="text-cyan-800 font-mono font-bold">{project.category}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-slate-700 border border-gray-200 text-xs font-medium">
                  {project.status}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                {project.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="mb-6 space-y-1.5">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-700 mb-2">
                  Key Highlights:
                </h3>
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-cyan-700 font-bold">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-200">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded bg-gray-100 text-slate-800 border border-gray-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Repository
                </a>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-cyan-700 hover:text-cyan-800 ml-auto"
                >
                  Discuss similar project →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Box */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Have a custom project in mind?</h2>
        <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
          I am available for freelance work, contract engineering, and full-time software roles.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium shadow-xs transition-colors"
        >
          Let’s Build Together
        </Link>
      </div>
    </div>
  );
}
