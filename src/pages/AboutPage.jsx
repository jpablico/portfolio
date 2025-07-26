import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { education } from '../data/education';

export default function AboutPage() {
  return (
    <section id="about" className="pt-24 pb-20 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Building tools that solve real problems</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Data Center Technician & Full-Stack Developer who turns operational pain points into automated solutions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Info icon={<MapPin size={20} />} text="McKinney, TX" />
            <Info icon={<Calendar size={20} />} text="3+ Years Experience" />
          </div>
          <p className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Managing critical infrastructure at Cloud Key's 24/7 NOC while building automation tools that my team actually uses. Pursuing my CS degree at Collin College and working toward CCNA certification.
          </p>
        </motion.div>

        {/* Personal Story */}
        <SectionTitle>Origin Story</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg"
        >
          My tech obsession started in 2011 with an HP Pavilion and a dream to play Battlefield 3. When my GPU couldn’t handle it, my grandmother got me a 650 Ti for my birthday. I promptly shocked my PC trying to install it and had to learn how to fix what I’d broken. I’ve been hooked on understanding how things work ever since. COVID lockdown brought me back to programming. I started The Odin Project on October 28, 2021, and haven’t looked back.
        </motion.p>

        <SectionTitle>Current Obsessions</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg"
        >
          Right now I’m deep into LLMs, networks, high‑performance computing, and building tools that actually solve problems. Always exploring how these technologies can make operations smoother.
        </motion.p>

        <SectionTitle>Philosophy</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg"
        >
          I build things to solve problems I encounter. Everything I make targets pain points—mostly tedious work that could be done better. The efficiency improvements are just a nice bonus.
        </motion.p>

        <SectionTitle>Future Vision</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-20 text-base md:text-lg"
        >
          Long‑term? I want to be a knowledge pool. I love tech, I love code, and I want to solve problems that make people’s work easier. Whether that’s through automation, better tooling, or bridging the gap between operations and development.
        </motion.p>
        <SectionTitle>My Path</SectionTitle>
        <div className="max-w-5xl mx-auto mb-20">
          <MetroMap onStationClick={(id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>


        {/* Education */}
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{edu.school}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">{edu.period}</span>
              </div>
              {edu.bullets && edu.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-2">
                  {edu.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>


        {/* Values / CTA */}
        <SectionTitle>How I Work</SectionTitle>
        <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-12">
          <li>Automation-first approach to repetitive tasks</li>
          <li>Build for reliability and production use</li>
          <li>Security and compliance minded</li>
          <li>Focus on tools teams actually want to use</li>
        </ul>

        <SectionTitle>Outside of Work</SectionTitle>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg">
          Active in Collin College's Computer Science Club, leading workshops and collaborative projects. Always tinkering with new tech and exploring cloud platforms.
        </p>

        <div className="text-center">
          <a
            href="/resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-4"
          >
            Download Résumé
          </a>
          <a
            href="/contact"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function SectionTitle({ children }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
    >
      {children}
    </motion.h3>
  );
}


function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">{icon}<span>{text}</span></div>
  );
}

// --- Mini Metro style map ---
const metroLines = [
  {
    name: 'Origin',
    color: '#f97316', // orange
    stations: [
      { id: 'origin',    x: 60,  y: 120, label: 'HP Pavilion' },
      { id: '650ti',     x: 140, y: 200, label: 'GTX 650 Ti' },
      { id: 'odin',      x: 260, y: 160, label: 'Odin Project (2021)' },
    ],
  },
  {
    name: 'Current',
    color: '#22c55e', // green
    stations: [
      { id: 'current',   x: 320, y: 120, label: 'Cloud Key NOC' },
      { id: 'cs-degree', x: 420, y: 200, label: 'CS @ Collin' },
      { id: 'ccna',      x: 500, y: 140, label: 'CCNA Prep' },
    ],
  },
  {
    name: 'Vision',
    color: '#3b82f6', // blue
    stations: [
      { id: 'philosophy', x: 200, y: 70,  label: 'Philosophy' },
      { id: 'vision',     x: 360, y: 60,  label: 'Future Vision' },
    ],
  },
];

function MetroMap({ onStationClick }) {
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 600 300" className="w-full h-auto">
        {metroLines.map((line) => (
          <g key={line.name}>
            <polyline
              points={line.stations.map((s) => `${s.x},${s.y}`).join(' ')}
              fill="none"
              stroke={line.color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {line.stations.map((s) => (
              <g key={s.id} onClick={() => onStationClick && onStationClick(s.id)} style={{ cursor: 'pointer' }}>
                <circle cx={s.x} cy={s.y} r="8" fill="#fff" stroke={line.color} strokeWidth="4" />
                <text
                  x={s.x + 12}
                  y={s.y - 12}
                  fontSize="12"
                  fill="#475569"
                  className="dark:fill-gray-300"
                >
                  {s.label}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}