import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Profile Picture with Status Ring */}
        <div className="relative mb-6 group">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-white shadow-xl shadow-slate-300/60">
            <Image
              src="/images/profile/profile.png"
              alt="Peter Lutanywa (MPLutanywa)"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span
            className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-white shadow-md"
            title="Available for opportunities"
            aria-label="Available for opportunities"
          ></span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100/80 border border-cyan-300/80 text-cyan-900 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
          Full-Stack Developer &amp; Systems Builder
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-tight sm:leading-none mb-6">
          From backend logic to{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
            frontend magic ✨
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          I’m <span className="text-slate-900 font-semibold">Peter Lutanywa</span> (MPLutanywa) — a full-stack
          engineer passionate about building scalable web applications, optimizing performance, and delivering
          flawless user experiences. Skilled in <span className="text-cyan-700 font-medium">Django</span>,{" "}
          <span className="text-teal-700 font-medium">Next.js</span>, and <span className="text-blue-700 font-medium">networking</span> —
          I connect ideas to execution.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium shadow-md shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-slate-800 font-medium border border-gray-300 shadow-xs transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
          >
            Get in Touch
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl hover:bg-gray-200/60 text-slate-600 hover:text-cyan-700 font-medium transition-colors"
          >
            About Me →
          </Link>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="w-full bg-white/70 border-y border-gray-200/90 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Core Engineering Pillars</h2>
            <p className="text-slate-600 text-sm mt-2">Comprehensive full-stack development from data layer to interface</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 text-xl shadow-xs">
                ⚙️
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Backend Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building secure, high-throughput REST APIs and business logic using Django, Python, PostgreSQL, and scalable authentication flows.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4 text-xl shadow-xs">
                🎨
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Modern Frontend</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Developing responsive, fast-loading, accessible user interfaces with Next.js 15 (Turbopack), React 19, TypeScript, and Tailwind CSS.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4 text-xl shadow-xs">
                🌐
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Networking &amp; Systems</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diagnosing network bottlenecks, configuring protocols, managing Linux servers, and deploying optimized cloud environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Work</h2>
            <p className="text-slate-600 text-sm mt-1">A selection of recent applications and systems</p>
          </div>
          <Link href="/projects" className="text-cyan-700 hover:text-cyan-800 text-sm font-semibold">
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="text-cyan-700 font-mono font-semibold">Full-Stack Application</span>
                <span>Django • Next.js • PostgreSQL</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Web Platform</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                An end-to-end web system with robust Django REST APIs, JWT authentication, and a reactive Next.js client interface.
              </p>
            </div>
            <Link href="/projects" className="text-cyan-700 hover:underline text-sm font-semibold">
              Read project details →
            </Link>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="text-teal-700 font-mono font-semibold">Networking &amp; Tooling</span>
                <span>Python • Sockets • Diagnostics</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Network Diagnostics Suite</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Lightweight monitoring and packet diagnostics utility evaluating latency, throughput, and system connection health.
              </p>
            </div>
            <Link href="/projects" className="text-cyan-700 hover:underline text-sm font-semibold">
              Read project details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to bring your next project to life?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need a full-stack platform, backend API architecture, or network performance optimization,
            let’s talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-medium shadow-sm transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/skills"
              className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-800 font-medium border border-gray-300 transition-colors"
            >
              View Full Tech Stack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
