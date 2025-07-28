import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Download, MapPin, Calendar, Award, Laptop, Database, Mail, Linkedin, Github } from 'lucide-react';
import { useForm } from '@formspree/react';
import { Link } from 'react-router-dom';

import { githubStats } from '../data/githubStats';
import { skills } from '../data/skills';
import { experiences } from '../data/experience';
import { education } from '../data/education';

import SkillBar from '../components/ui/SkillBar';
import portraitJoshP from '../assets/portraitJoshP.jpeg';

import PROJECTS from '../data/projects';
import ProjectCard from '../components/project/ProjectCard';


export default function HomePage() {
  const titles = [
    'Data Center Technician',
    'Full‑Stack Developer',
    'DevOps Engineer',
    'Systems Administrator',
  ];

  const subtitles = [
    'Maintaining critical infrastructure & automating NOC operations',
    'Building scalable web applications with modern tech stacks',
    'Bridging development & operations through intelligent automation',
    'Managing enterprise infrastructure & ensuring optimal performance',
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0]);
  const [displaySubtitle, setDisplaySubtitle] = useState(subtitles[0]);

  // Cycle to the next title every 4.5 seconds
  useEffect(() => {
    const cycle = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 4500);
    return () => clearInterval(cycle);
  }, []);

  // Character‑shuffle reveal effect whenever titleIndex changes
  useEffect(() => {
    const target = titles[titleIndex];
    let frame = 0;
    const fps = 30;
    const duration = 800; // ms
    const steps = Math.ceil(duration / (1000 / fps));
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const scramble = setInterval(() => {
      const progress = frame / steps;
      const revealCount = Math.floor(progress * target.length);
      let text = '';
      for (let i = 0; i < target.length; i++) {
        text += i < revealCount ? target[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplayText(text);
      frame++;
      if (frame > steps) {
        clearInterval(scramble);
        setDisplayText(target);
        setDisplaySubtitle(subtitles[titleIndex]);
      }
    }, 1000 / fps);

    return () => clearInterval(scramble);
  }, [titleIndex]);

  // When the title has fully settled, start scrambling the subtitle (with mobile logic)
  useEffect(() => {
    if (displayText !== titles[titleIndex]) return; // wait until title is fully revealed
    const isMobile = window.innerWidth < 768;
    const target = subtitles[titleIndex];

    if (isMobile) {
      let opacity = 0;
      let yOffset = 10;
      setDisplaySubtitle('');
      const fadeStep = 1 / 10;
      const slideStep = yOffset / 10;
      let frame = 0;

      const interval = setInterval(() => {
        opacity += fadeStep;
        yOffset -= slideStep;
        frame++;
        const el = document.getElementById('subtitle-mobile');
        if (el) {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${yOffset}px)`;
        }
        if (frame >= 10) {
          clearInterval(interval);
          setDisplaySubtitle(target);
          if (el) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
          }
        }
      }, 30);

      return () => clearInterval(interval);
    }

    let frame = 0;
    const fps = 30;
    const duration = 800;
    const steps = Math.ceil(duration / (1000 / fps));
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    const scramble = setInterval(() => {
      const progress = frame / steps;
      const revealCount = Math.floor(progress * target.length);
      text = '';
      for (let i = 0; i < target.length; i++) {
        text += i < revealCount ? target[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplaySubtitle(text);
      frame++;
      if (frame > steps) {
        clearInterval(scramble);
        setDisplaySubtitle(target);
      }
    }, 1000 / fps);

    return () => clearInterval(scramble);
  }, [displayText, titleIndex]);

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="-mt-px pt-10 pb-12 md:pt-2 md:pb-16 bg-hero-gradient animate-hero-gradient min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Josh Pablico</span>
              </h1>
              <div className="min-h-[5rem]">
                <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-2">
                  {displayText}
                </h2>
                <div className="min-h-[3.5rem]">
                  <p
                    id="subtitle-mobile"
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl transition-opacity duration-300 ease-in-out"
                  >
                    {displaySubtitle}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  View My Work
                </Link>
                <a
                  href="/resume.pdf"
                  className="flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                <StatCard color="blue" value="30%" label="Manual ticket work cut" />
                <StatCard color="green" value="40%" label="Power audit consistency ↑" />
                <StatCard color="purple" value="12" label="Zero‑touch PCs deployed" />
                <StatCard color="orange" value={githubStats.contributions.toLocaleString()} label="GH contributions" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                  <img src={portraitJoshP} alt="Josh Pablico" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                  <Code className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      {/* Keep these sections for scrollspy; if you move them to/about page, remove their IDs here */}
      <AboutSection />

      {/* Education */}
      <EducationSection education={education} />

      {/* Experience */}
      <ExperienceSection experiences={experiences} />

      {/* Skills */}
      <SkillsSection skills={skills} />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />
    </>
  );
}

/* --- Small sub-components for cleanliness --- */
function StatCard({ color, value, label }) {
  const colorMap = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
  };
  return (
    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className={`text-2xl font-bold ${colorMap[color]}`}>{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}

/* You can also split the following into separate files if you prefer */
function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I develop automation tools and full‑stack applications that solve real operational challenges in data center environments. Currently working as a Data Center Technician at Cloud Key while pursuing my CS degree, I combine hands‑on infrastructure experience with software development to create solutions that actually get used in production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I build internal tools (Power Audit Tool, NOCLLAMA, Ticket Helper) and hone fundamentals via projects from The Odin Project.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I blend hands‑on infrastructure experience with full‑stack development to automate workflows that teams actually depend on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Info icon={<MapPin size={20} />} text="McKinney, TX" />
              <Info icon={<Calendar size={20} />} text="3+ Years Experience" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
            <Stat icon={<Award />} value="10+" label="Projects" color="blue" />
            <Stat icon={<Laptop />} value="3+" label="Production Tools" color="green" />
            <Stat icon={<Code />} value="15+" label="Contributions" color="purple" />
            <Stat icon={<Database />} value="10+" label="Technologies" color="orange" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EducationSection({ education }) {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">My academic journey and technical foundation.</p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{edu.school}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 lg:mt-0">
                  <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                  {edu.gpa && (
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">My professional journey and impact.</p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 last:border-l-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Technologies I specialize in.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <SkillBar {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [state, handleSubmit] = useForm('mqalqyvw');
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Tell me about the process that's slowing your team down.</p>
          <p className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            I enjoy collaborating with teams to identify pain points and build tools that actually get used. Drop me a line about what you're working on.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <ContactLink icon={<Mail size={24} />} title="Email" value="jpablico27@gmail.com" href="mailto:jpablico27@gmail.com" />
            <ContactLink icon={<Linkedin size={24} />} title="LinkedIn" value="linkedin.com/in/josh-pablico-618108220" href="https://www.linkedin.com/in/josh-pablico-618108220" />
            <ContactLink icon={<Github size={24} />} title="GitHub" value="github.com/jpablico" href="https://github.com/jpablico" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <FormField id="name" label="Name" type="text" placeholder="Your name" />
              <FormField id="email" label="Email" type="email" placeholder="your.email@example.com" />
              <FormField id="subject" label="Subject" type="text" placeholder="What's this about?" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Describe the challenge you're facing..." />
              </div>
              <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 dark:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 disabled:opacity-60">
                Let's Connect
              </button>
              {state.succeeded && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">Thanks! Your message has been sent.</p>
              )}
              {state.errors && state.errors.length > 0 && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">There was a problem sending your message.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, text }) {
  return <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">{icon}<span>{text}</span></div>;
}

function Stat({ icon, value, label, color }) {
  const colorMap = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
  };
  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg text-center">
      <div className={`${colorMap[color]} mx-auto mb-3`}>{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

function ContactLink({ icon, title, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </a>
  );
}

function FormField({ id, label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder={placeholder}
      />
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A selection of what I've built.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}