"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Construct mailto link as fallback or direct launch
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:lutanywapeter@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      // Trigger user's mail client
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
          Contact Me
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
          Have an idea, project, or opportunity you’d like to discuss? Send me a message below or email me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Contact Details</h2>

            <div className="space-y-3.5 text-sm">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
                <a
                  href="mailto:lutanywapeter@gmail.com"
                  className="text-cyan-700 hover:text-cyan-800 font-semibold hover:underline break-all"
                >
                  lutanywapeter@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">GitHub</p>
                <a
                  href="https://github.com/lumap-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:text-cyan-800 font-semibold hover:underline"
                >
                  github.com/lumap-svg
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Availability</p>
                <p className="text-slate-700 font-medium">Full-Stack &amp; Networking Roles (Remote / Contract)</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Timezone</p>
                <p className="text-slate-700 font-medium">East Africa Time (EAT, UTC+3)</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-950 font-medium leading-relaxed">
            💡 <strong>Quick tip:</strong> Submitting the form opens your preferred email client pre-populated with your message for immediate direct sending.
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
            {status === "success" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Thank you!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your email client has been prepared. If it didn’t open automatically, you can email me directly at{" "}
                  <a
                    href="mailto:lutanywapeter@gmail.com"
                    className="text-cyan-700 underline font-semibold"
                  >
                    lutanywapeter@gmail.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-gray-100 text-slate-800 hover:bg-gray-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Name <span className="text-cyan-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Email <span className="text-cyan-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-stack opportunity / Project inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-cyan-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 text-white font-medium text-sm transition-all shadow-xs shadow-cyan-600/30 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Preparing message...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
