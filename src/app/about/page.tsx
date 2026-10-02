import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Peter Lutanywa (MPLutanywa), background in full-stack development, Django, Next.js, and network engineering.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
          About Me
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Peter Lutanywa
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Full-Stack Developer &amp; Systems Enthusiast
        </p>
      </div>

      {/* Main Grid with Profile Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-gray-100 shadow-md mb-4">
              <Image
                src="/images/profile/profile.png"
                alt="Peter Lutanywa"
                fill
                sizes="(max-width: 768px) 192px, 192px"
                priority
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Peter Lutanywa</h2>
            <p className="text-xs font-mono text-cyan-700 mt-1">@MPLutanywa / lumap-svg</p>
            <div className="w-full border-t border-gray-200 my-4"></div>
            <div className="w-full text-left space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-700">Specialization:</span>
                <span>Full-Stack &amp; Networks</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-700">Core Stack:</span>
                <span>Django, Next.js, Python</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-700">Availability:</span>
                <span className="text-emerald-700 font-medium">Open to roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Story */}
        <div className="md:col-span-2 space-y-6 text-slate-700 leading-relaxed">
          <section className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Who I Am</h2>
            <p>
              Hello! I’m <strong className="text-slate-900 font-semibold">Peter Lutanywa</strong>, known online as{" "}
              <strong className="text-cyan-700 font-semibold">MPLutanywa</strong>. I am a software engineer focused on building robust, scalable web applications that solve real-world problems.
            </p>
            <p>
              My engineering philosophy centers around the principle of{" "}
              <em className="text-cyan-800 not-italic font-medium">“connecting ideas to execution.”</em> Whether designing the data schema and API contracts on the backend, configuring network infrastructure, or crafting intuitive, responsive user interfaces, I take pride in understanding the entire lifecycle of a system.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-cyan-700">⚡</span> Backend Logic
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Proficient in Python and Django. I build clean, testable, and secure RESTful APIs with an emphasis on data integrity, relational modeling, and high-performance database interactions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-teal-700">✨</span> Frontend Magic
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Modern frontend engineering with Next.js, React, TypeScript, and Tailwind CSS. I prioritize web vitals, accessibility, responsive layouts, and smooth user interactions.
              </p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Networking &amp; Infrastructure</h2>
            <p>
              Unlike many frontend-first developers, I have a solid foundation in computer networking protocols, socket architecture, server administration, and latency optimization. This allows me to troubleshoot issues holistically — from browser network tab traces down to server connections and load bottlenecks.
            </p>
          </section>
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-2 flex flex-wrap gap-4">
        <Link
          href="/skills"
          className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-medium shadow-xs transition-colors"
        >
          Explore My Skills
        </Link>
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-slate-800 border border-gray-300 shadow-xs font-medium transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl hover:bg-gray-200/60 text-slate-700 hover:text-cyan-700 font-medium transition-colors"
        >
          Contact Me →
        </Link>
      </div>
    </div>
  );
}
