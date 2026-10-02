import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description:
    "Explore the technical skills, frameworks, languages, and tools utilized by Peter Lutanywa (MPLutanywa).",
};

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "🐍",
    description: "Architecting reliable, high-throughput server backends and clean REST APIs.",
    skills: [
      { name: "Django & DRF" },
      { name: "Python" },
      { name: "RESTful API Design" },
      { name: "JWT & Session Auth" },
      { name: "ORM & Query Optimization" },
      { name: "Node.js Basics" },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "⚛️",
    description: "Crafting reactive, accessible, and fast web user interfaces.",
    skills: [
      { name: "Next.js (App Router)" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 & Semantic Web" },
      { name: "Modern CSS & Responsive Design" },
    ],
  },
  {
    title: "Networking & Systems",
    icon: "🌐",
    description: "Deep understanding of networking layers, protocols, and server infrastructure.",
    skills: [
      { name: "TCP/IP & UDP Protocols" },
      { name: "HTTP / HTTPS & DNS" },
      { name: "Network Diagnostics & Analysis" },
      { name: "Linux Server Administration" },
      { name: "Latency Optimization" },
      { name: "Nginx / Reverse Proxies" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "🗄️",
    description: "Data modeling, relational integrity, migrations, and querying.",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Database Migrations" },
      { name: "Schema & Index Design" },
      { name: "Data Normalization" },
    ],
  },
  {
    title: "Developer Tools & Workflow",
    icon: "🛠️",
    description: "Modern toolchains that ensure code quality and seamless delivery.",
    skills: [
      { name: "Git & GitHub Version Control" },
      { name: "Turbopack & Webpack" },
      { name: "ESLint & Prettier" },
      { name: "Postman & API Testing" },
      { name: "VS Code & Terminal" },
      { name: "npm / pnpm Package Management" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
          Technical Arsenal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Skills &amp; Technologies
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
          A breakdown of languages, frameworks, and system proficiencies I use to turn technical challenges into dependable software.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl p-2 rounded-xl bg-gray-100 border border-gray-200">
                {category.icon}
              </span>
              <h2 className="text-lg font-bold text-slate-900">{category.title}</h2>
            </div>
            <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">{category.description}</p>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-slate-800 border border-gray-200 hover:bg-gray-200 hover:text-cyan-900 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Want to see these skills in action?</h2>
          <p className="text-sm text-slate-600 mt-1">
            Browse through my projects or get in touch for custom collaboration.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium shadow-xs transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-800 text-sm font-medium border border-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
