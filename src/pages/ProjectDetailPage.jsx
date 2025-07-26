import { useParams, Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-24 pb-16 min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Project not found.</h2>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full max-h-96 object-cover rounded-xl shadow mb-8" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map(t => (
            <span key={t} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{t}</span>
          ))}
        </div>

        <div className="flex gap-4 mb-12">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={20} /> Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            <ExternalLink size={20} /> Live Demo
          </a>
        </div>

        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to projects</Link>
      </div>
    </section>
  );
}