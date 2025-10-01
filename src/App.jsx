import React, { useEffect, useState } from "react";
import { Sun, Moon, Monitor, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import resumeUrl from "./assets/Caleb_Adebayo_Resume.pdf";

export default function Portfolio() {
  const profile = {
    name: "Caleb Adebayo",
    role: "Full-Stack Developer",
    location: "British Columbia, Canada",
    email: "calebtolorunleke@yahoo.com",
    resumeUrl: resumeUrl,
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
      title: "Beta House",
      desc: "Affordable and functional student/young professional housing platform.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/beta-house",
      live: "https://beta-house-eta.vercel.app",
    },
    {
      title: "Transita App",
      desc: "Modern ride-booking app with authentication, live tracking, and booking management.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/the_transita_app",
      live: "https://the-transita-app.vercel.app/",
    },
    {
      title: "Shortly",
      desc: "Lightweight URL shortener with local persistence and copy-to-clipboard.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Responsive design",
        "Netlify serverless API",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/urlshortner",
      live: "https://urlshortner-rho-lilac.vercel.app/",
    },
    {
      title: "Lumina StyleHub",
      desc: "Boutique landing page showcasing fashion products.",
      tech: ["React.js", "Tailwind CSS", "Responsive design", "Git & GitHub"],
      repo: "https://github.com/calebtolorunleke/LuminaStyleHub",
      live: "https://lumina-style-hub.vercel.app",
    },
    {
      title: "Brandwave",
      desc: "Team-built platform for launching brand websites.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Context API",
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/Brandwave_App",
      live: "https://the-brandwave.vercel.app/",
    },
    {
      title: "API Management Portal (GTBank)",
      desc: "Internal onboarding system for API partners with RBAC and OTP login.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Git & GitHub",
      ],
      repo: "Private/Internal",
      live: "Internal Only",
    },
    {
      title: "Travel Legnos",
      desc: "Travel agency booking platform with destinations, packages, and dynamic UI.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/travellegnos",
      live: "https://travellegnos.vercel.app/",
    },
    {
      title: "Tasman",
      desc: "Productivity app for CEOs to track and manage daily tasks.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "JWT",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/tasmanApp",
      live: "https://tasman-app.vercel.app",
    },
    {
      title: "The Piggy",
      desc: "Fintech savings app with automated deposits, goal tracking, and dashboards.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "JWT",
        "Git & GitHub",
      ],
      repo: "https://github.com/calebtolorunleke/the_Piggy",
      live: "https://the-piggy.vercel.app",
    },
    {
      title: "Properly Real Estate App",
      desc: "Real estate app connecting landlords and tenants with secure access.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Git & GitHub",
      ],
      repo: "",
      live: "",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer (Volunteer)",
      company: "Skill4Skill – Toronto, ON, Canada",
      range: "Aug 2025 – Present",
      bullets: [
        "Develop and maintain backend systems with Node.js, Express, and MongoDB.",
        "Build REST APIs and implement responsive UIs with Next.js, TypeScript, and Tailwind CSS.",
        "Optimize performance, write tests, and ensure security compliance.",
        "Document APIs and workflows while debugging cross-platform issues.",
      ],
    },
    {
      role: "Full-Stack / Front-end Developer",
      company: "Findworka – Hybrid",
      range: "Feb 2022 – Jul 2025",
      bullets: [
        "Delivered 59+ responsive web pages, increasing engagement by 40% and reducing load times by 25%.",
        "Migrated ~44,776 JavaScript files to TypeScript, cutting bug reports by 30%.",
        "Implemented Redux Toolkit, React Query, and Storybook to boost performance and reusability.",
        "Developed secure banking modules with OTP verification, RBAC, and session tracking.",
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Swit – Remote, Australia",
      range: "Jan 2021 – Jan 2022",
      bullets: [
        "Engineered state management with Context and Zustand, reducing bundle size by 28%.",
        "Redesigned SaaS UI, improving satisfaction by 15% and reducing churn by 10%.",
        "Optimized builds and asset delivery, achieving 100/100 Lighthouse performance.",
      ],
    },
    {
      role: "Intern Frontend Developer",
      company: "Deloitte – Remote",
      range: "Jun 2020 – Dec 2020",
      bullets: [
        "Redesigned e-commerce UI with React and Tailwind CSS, boosting engagement by 30%.",
        "Implemented PWA features, raising mobile retention by 25%.",
        "Optimized API integration, cutting load times by 40%.",
      ],
    },
  ];

  const education = [
    {
      school: "Obafemi Awolowo University",
      degree: "Postgraduate, Computer Science and Engineering",
      year: "2023 - 2025",
    },
    {
      school: "University of Ado Ekiti",
      degree: "Bachelor of Science, Biotechnology",
      year: "2014 - 2020",
    },
    {
      school: "Obafemi Awolowo University",
      degree: "Diploma, Computer Science and Engineering",
      year: "2013 - 2015",
    },
    {
      school: "Unique Minds International School",
      degree: "West Africa Senior Secondary School Certificate (WASSCE)",
      year: "2008 - 2012",
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Development Certificate",
      issuer: "Tech Studio Academy",
      year: "2025",
    },
    {
      title: "Meta Full-Stack Developer",
      issuer: "Coursera / Meta",
      year: "2025",
    },
    {
      title: "Frontend Development Certificate",
      issuer: "Mimo",
      year: "2021",
    },
    {
      title: "Spring Boot Certified",
      issuer: "Spring Boot",
      year: "2022",
    },
    {
      title: "API Designer",
      issuer: "API Academy",
      year: "2023",
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      issuer: "ScrumStudy",
      year: "2023",
    },
    {
      title: "Microsoft Certified: Azure",
      issuer: "Microsoft",
      year: "2023",
    },
    {
      title: "IBM IT Support",
      issuer: "Coursera / IBM",
      year: "2023",
    },
    {
      title: "Google IT Support Professional",
      issuer: "Coursera / Google",
      year: "2022",
    },
  ];

  // Theme state: light | dark | system
  const [theme, setTheme] = useState("system");
  const [bgColor, setBgColor] = useState("#f8fafc"); // light background
  const [textColor, setTextColor] = useState("#111827"); // dark text
  const [skillTextColor, setSkillTextColor] = useState("#111827"); // key skills text

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (mode === "dark" || (mode === "system" && systemDark)) {
      setBgColor("#111827");
      setTextColor("#f8fafc");
      setSkillTextColor("#f8fafc");
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#f8fafc";
    } else {
      setBgColor("#f8fafc");
      setTextColor("#111827");
      setSkillTextColor("#111827");
      document.body.style.backgroundColor = "#f8fafc";
      document.body.style.color = "#111827";
    }
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen scroll-smooth transition-colors duration-500"
      id="home"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1450px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-xl hover:text-indigo-700 cursor-pointer text-shadow-lg"
            href="#home"
          >
            {profile.name}
          </a>
          <div className="flex items-center gap-4">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-md">
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

          {/* Mobile + Theme Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex flex-col w-6 h-5 justify-between items-center p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="block w-full h-0.5 bg-slate-700 dark:bg-slate-300"></span>
                <span className="block w-full h-0.5 bg-slate-700 dark:bg-slate-300"></span>
                <span className="block w-full h-0.5 bg-slate-700 dark:bg-slate-300"></span>
              </button>
            </div>

            {/* Desktop Theme Buttons */}
            <div className="hidden md:flex items-center gap-2">
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
              </button>{" "}
              <a
                href={profile.resumeUrl}
                className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2 p-4 text-sm">
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
              <a
                href={profile.resumeUrl}
                className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md mt-2 text-center"
              >
                Resume
              </a>

              {/* Optional: Theme buttons in mobile dropdown */}
              <div className="flex gap-2 mt-2">
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
          </div>
        )}
      </header>

      <main className="max-w-[1450px] mx-auto mt-5 px-6 py-12 space-y-16">
        {/* ABOUT / HERO */}
        <motion.section
          id="about"
          className="grid md:grid-cols-4 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2">
            {" "}
            <h1
              className="text-4xl font-extrabold mb-3"
              style={{ color: textColor }}
            >
              {profile.role} — {profile.name}
            </h1>{" "}
            <p className="text-lg max-w-2xl" style={{ color: textColor }}>
              {profile.summary}
            </p>
            <div className="mt-6">
              <h4
                className="text-sm font-semibold"
                style={{ color: textColor }}
              >
                {" "}
                Key skills
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-slate-900 dark:text-slate-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 px-4 py-2 rounded-md"
              >
                Email <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1"></div>

          <aside className="md:col-span-1 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Location
            </div>{" "}
            <div className="text-md font-bold text-slate-600 dark:text-slate-300">
              {profile.location}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Contact
            </div>
            <div className="mb-3">
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                className="text-indigo-600 dark:text-indigo-400 break-all"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex gap-3 mt-3">
              <a
                href="https://github.com/calebtolorunleke"
                target="_blank"
                aria-label="github"
                className="text-slate-600 hover:text-slate-900 dark:hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/calebtol/"
                target="_blank"
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
          <h2
            className="text-3xl font-semibold mb-6"
            style={{ color: textColor }}
          >
            Projects
          </h2>
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
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Demo
                  </div>
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
                      className="text-sm text-slate-600 dark:text-slate-300 hover:underline"
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
          <h2
            className="text-3xl font-semibold mb-6"
            style={{ color: textColor }}
          >
            Experience
          </h2>
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
                  <div className="font-semibold text-lg text-slate-900 dark:text-white">
                    {e.role}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {e.company}
                  </div>
                </div>
                <div className="text-sm text-slate-400 dark:text-slate-500">
                  {e.range}
                </div>
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
            <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Education
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              {education.map((ed) => (
                <li key={ed.school}>
                  <div className="font-semibold">{ed.school}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {ed.degree} • {ed.year}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Certifications
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              {certifications.map((c) => (
                <li key={c.title}>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
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
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              Contact
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-700 mb-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
              Send
            </button>
          </form>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              Other ways to reach me
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-indigo-600 dark:text-indigo-400"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="#" className="text-indigo-600 dark:text-indigo-400">
                  github.com/caleb
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="#" className="text-indigo-600 dark:text-indigo-400">
                  linkedin.com/in/caleb
                </a>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
