// --- IMPORTS ---
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className={\`min-h-screen font-sans \${darkMode ? "bg-gradient-to-br from-[#090e17] via-[#111827] to-[#0f172a] text-white" : "bg-white text-black"}\`}>
      <style>{\`html { scroll-behavior: smooth; }\`}</style>

      {/* --- NAVBAR --- */}
      <nav className={\`sticky top-0 z-50 \${darkMode ? "bg-[#0f172a]/80 text-white" : "bg-white text-black"} backdrop-blur shadow-md py-4 px-6 flex justify-between items-center border-b border-gray-700\`}>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-bold tracking-wide"
        >
          Nikhil Sharma
        </motion.h1>
        <ul className="flex gap-6 text-sm items-center">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={\`#\${section.id}\`} className="hover:underline">
                {section.label}
              </a>
            </li>
          ))}
          <li><a href="mailto:nikhilsharmash20@gmail.com"><Mail className="w-5 h-5" /></a></li>
          <li><a href="https://github.com/nikhilsh2003" target="_blank"><Github className="w-5 h-5" /></a></li>
          <li><a href="https://www.linkedin.com/in/nikhilsh2003/" target="_blank"><Linkedin className="w-5 h-5" /></a></li>
          <li><button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button></li>
        </ul>
      </nav>

      {/* --- EXPERIENCE SECTION --- */}
      <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 px-6">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">💼 Professional Experience</h2>
        <Card className="bg-[#1e1b2e] border border-gray-700">
          <CardContent className="p-6 text-gray-100">
            <h3 className="text-xl font-semibold">Deutsche Bank – Software Developer</h3>
            <p className="text-sm text-gray-400">Jul 2023 – Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Risk in Banking Book project (Scala, Hadoop, Spark)</li>
              <li>Java Spring Boot backend services</li>
              <li>Liquibase + SQL optimization</li>
              <li>Airflow + Python automation</li>
              <li>DevOps & OCP4 migration</li>
              <li>Agile tribe ceremonies</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-[#1e1b2e] border border-gray-700 mt-6">
          <CardContent className="p-6 text-gray-100">
            <h3 className="text-xl font-semibold">Mastercard – Summer Intern</h3>
            <p className="text-sm text-gray-400">May 2022 – July 2022</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Built configurable data validator in ASP.NET</li>
              <li>Regex + Razor frontend</li>
              <li>AJAX lazy load optimization</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* --- PROJECTS SECTION --- */}
      <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 px-6">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-10">🚀 Personal Projects</h2>
        <div className="grid gap-6">
          <Card className="bg-[#1e1b2e] border border-gray-700">
            <CardContent className="p-6 text-gray-100">
              <h3 className="text-lg font-semibold">Crypto Tracker</h3>
              <p className="text-sm text-gray-300">Fullstack app for live crypto prices with Dockerized deployment on Render.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1e1b2e] border border-gray-700">
            <CardContent className="p-6 text-gray-100">
              <h3 className="text-lg font-semibold">GitHub Job Board</h3>
              <p className="text-sm text-gray-300">Automated job listing site scraping GitHub issues and sending notifications.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* --- BLOG SECTION --- */}
      <motion.section id="blog" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 px-6">
        <h2 className="text-4xl font-bold text-center text-fuchsia-400 mb-10">📝 Blog Highlights (MDX)</h2>
        <div className="text-center text-gray-200 text-sm">
          <p className="mb-2">Coming Soon: Developer musings, architecture breakdowns, and CI/CD hacks.</p>
          <p>Posts will be powered by Markdown/MDX for easy writing and Git-based publishing.</p>
        </div>
      </motion.section>

      {/* --- CONTACT SECTION --- */}
      <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-lime-300 mb-8">📬 Contact Me</h2>
        <form action="https://formspree.io/f/mgegvjzr" method="POST" className="grid gap-4 bg-[#1e1b2e] p-6 rounded-lg border border-gray-700">
          <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded bg-gray-900 border border-gray-600 text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-gray-900 border border-gray-600 text-white" />
          <textarea name="message" placeholder="Your Message" required rows={4} className="p-3 rounded bg-gray-900 border border-gray-600 text-white"></textarea>
          <Button type="submit" className="bg-lime-500 hover:bg-lime-600 text-black font-semibold">Send Message</Button>
        </form>
      </motion.section>

      <footer className="text-center border-t pt-6 text-gray-400 text-xs">
        © 2025 Nikhil Sharma • Designed with ✨ and Tailwind • Open to awesome opportunities
      </footer>
    </main>
  );
}// The main React component file content you provided
