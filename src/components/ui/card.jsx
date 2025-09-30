import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border p-4 shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

import React, { useEffect, useState } from "react";
import { Sun, Moon, Monitor, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const profile = {
    name: "Caleb Adebayo",
    role: "Full-Stack Developer",
    location: "Kamloops, BC, Canada",
    email: "caleb@example.com",
    resumeUrl: "#",
    summary:
      "Full-stack developer specializing in React, Node.js and modern web architectures. I build thoughtful UI, reliable backends, and ship production-ready products.",
    skills: [
      "React / Next.js",
      "TypeScript / JavaScript",
      "Node.js / Express",
      "Tailwind CSS",
      "MongoDB / PostgreSQL",
      "Testing (Jest)",
      "CI / CD",
    ],
  };

  const projects = [
    {
      title: "Brandwave",
      desc: "Marketing platform with campaign dashboards, auth, and file uploads.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      repo: "#",
      live: "#",
    },
    {
      title: "Lumina StyleHub",
      desc: "E‑commerce demo featuring product detail pages and checkout flows.",
      tech: ["React", "Stripe", "Tailwind"],
      repo: "#",
      live: "#",
    },
    {
      title: "Tasman",
      desc: "Small marketplace demo with real-time chat and notifications.",
      tech: ["Next.js", "Socket.IO", "Postgres"],
      repo: "#",
      live: "#",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Findworka",
      range: "Feb 2022 – Jul 2025",
      bullets: [
        "Built responsive React apps using component-driven design.",
        "Improved performance and accessibility across products.",
      ],
    },
    {
      role: "Software Engineer / App Support",
      company: "GTBank",
      range: "Oct 2022 – Jun 2025",
      bullets: [
        "Maintained production systems and reduced incident timeouts.",
        "Added logging and tracing for quicker debugging.",
      ],
    },
  ];

  const education = [
    {
      school: "Obafemi Awolowo University",
      degree: "B.Sc. Computer Science",
      year: "2019",
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Development Certificate",
      issuer: "Tech Studio Academy",
      year: "2025",
    },
    {
      title: "Frontend Development Certificate",
      issuer: "Techyjaunt",
      year: "2025",
    },
  ];

  // Theme state: light | dark | system
  const [theme, setTheme] = useState("system");

  // Load theme from localStorage or system on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (mode === "dark" || (mode === "system" && systemDark)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // Framer Motion variant for sections
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
              {profile.name}
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#about"
                className="hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                Experience
              </a>
              <a
                href="#education"
                className="hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                Education
              </a>
              <a
                href="#contact"
                className="hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              className="hidden sm:inline-block text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md"
            >
              Resume
            </a>

            <button
              aria-label="theme-light"
              onClick={() => setTheme("light")}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Sun className="w-5 h-5 text-amber-500" />
            </button>
            <button
              aria-label="theme-dark"
              onClick={() => setTheme("dark")}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Moon className="w-5 h-5 text-indigo-500" />
            </button>
            <button
              aria-label="theme-system"
              onClick={() => setTheme("system")}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Monitor className="w-5 h-5 text-slate-500" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* ABOUT / HERO */}
        <motion.section
          id="about"
          className="grid md:grid-cols-3 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2">
            <h1 className="text-4xl font-extrabold mb-3 text-slate-900 dark:text-white">
              {profile.role} — {profile.name}
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
              {profile.summary}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                Key skills
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 px-4 py-2 rounded-md"
              >
                Email <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <aside className="md:col-span-1 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Location
            </div>
            <div className="font-medium mb-3">{profile.location}</div>

            <div className="text-sm text-slate-600 dark:text-slate-300">
              Contact
            </div>
            <div className="mb-3">
              <a
                href={`mailto:${profile.email}`}
                className="text-indigo-600 dark:text-indigo-400"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href="#"
                aria-label="github"
                className="text-slate-600 hover:text-slate-900 dark:hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="text-slate-600 hover:text-slate-900 dark:hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </aside>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                className="rounded-2xl p-5 shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <div className="text-xs text-slate-500">Demo</div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      Live
                    </a>
                  )}
                  {p.repo !== "#" && (
                    <a
                      href={p.repo}
                      className="text-sm text-slate-600 hover:underline"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          {experience.map((e) => (
            <motion.div
              key={e.role}
              className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{e.role}</div>
                  <div className="text-sm text-slate-500">{e.company}</div>
                </div>
                <div className="text-sm text-slate-400">{e.range}</div>
              </div>
              <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 list-disc ml-5">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* EDUCATION & CERTIFICATIONS */}
        <motion.section
          id="education"
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Education</h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              {education.map((ed) => (
                <li key={ed.school}>
                  <div className="font-semibold">{ed.school}</div>
                  <div className="text-sm text-slate-500">
                    {ed.degree} • {ed.year}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Certifications</h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              {certifications.map((c) => (
                <li key={c.title}>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-slate-500">
                    {c.issuer} • {c.year}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <form className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent"
            ></textarea>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
              >
                Send message
              </button>
              <button
                type="reset"
                className="text-sm text-slate-600 dark:text-slate-300"
              >
                Reset
              </button>
            </div>
          </form>

          <aside className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Reach out</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Prefer email?{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-indigo-600 dark:text-indigo-400"
              >
                {profile.email}
              </a>
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </aside>
        </motion.section>
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name} — Built with React &
        Tailwind.
      </footer>
    </div>
  );
}
