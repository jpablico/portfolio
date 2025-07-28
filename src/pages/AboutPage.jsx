import { motion } from 'framer-motion';
import { MapPin, Calendar, Settings, Handshake, Book, Atom, Server, Code2, Network } from 'lucide-react';
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building tools that solve real problems
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm someone who believes work should be smarter, not harder. When I see colleagues spending hours on something that could take minutes, that's when I get motivated to build a solution.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Managing critical infrastructure at Cloud Key's 24/7 NOC while building automation tools that my team actually uses. Pursuing my Computer Science degree at Collin College and working toward CCNA certification.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">3+ Years Experience</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">CCNA Certification in Progress</span>
          </div>
        </motion.div>

        <SectionTitle>A Different Perspective</SectionTitle>
        <div className="border-b border-gray-300 dark:border-gray-600 pb-12 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg"
          >
            Having worked both infrastructure and development gives me a unique view of how systems really work. I understand hardware limitations, data flow, and operational constraints in ways that influence my design decisions. When I built our AI documentation assistant, it wasn't just about the algorithm — it was about understanding our server capabilities and realizing we could host a powerful LLM locally.
          </motion.p>
        </div>

        <SectionTitle>What Drives Me</SectionTitle>
        <div className="border-b border-gray-300 dark:border-gray-600 pb-12 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-base md:text-lg"
          >
            I learn by doing and thrive on collaboration. My best projects started as conversations with teammates where we identified real pain points together. There's nothing more satisfying than turning someone's daily frustration into a tool that genuinely makes their work easier.
          </motion.p>
        </div>

        <SectionTitle>Currently Learning</SectionTitle>
        <div className="border-b border-gray-300 dark:border-gray-600 pb-12 mb-12">
          <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-20 text-base md:text-lg space-y-4">
            <p>
              I'm currently working toward my CCNA certification while building out my skills in full-stack development and infrastructure automation.
            </p>
            <div className="flex justify-center flex-wrap gap-6 opacity-80 mt-8">
              <div className="flex flex-col items-center space-y-1">
                <Atom className="h-8 w-8 text-blue-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">React</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Server className="h-8 w-8 text-green-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Node.js</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Code2 className="h-8 w-8 text-yellow-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Python</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Network className="h-8 w-8 text-purple-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Cisco</span>
              </div>
            </div>
          </div>
        </div>



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
  const iconMap = {
    "A Different Perspective": <Settings className="w-5 h-5 inline-block text-blue-500" />,
    "What Drives Me": <Handshake className="w-5 h-5 inline-block text-blue-500" />,
    "Currently Learning": <Book className="w-5 h-5 inline-block text-blue-500" />
  };
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
    >
      <span className="mr-2">{iconMap[children]}</span>
      {children}
    </motion.h3>
  );
}


function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">{icon}<span>{text}</span></div>
  );
}