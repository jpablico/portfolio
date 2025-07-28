import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import PROJECTS from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            {project.details?.hero?.subtitle && (
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{project.details.hero.subtitle}</p>
            )}
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <Github size={18} /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-purple-700 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition shadow-lg animate-pulse"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow mb-8">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map(t => (
            <span key={t} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{t}</span>
          ))}
        </div>

        {/* Updated structured project details rendering */}
        {project.details?.challenge && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.details.challenge.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.details.challenge.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.details.challenge.painPoints.map((p, idx) => (
                <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.details?.solution && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.details.solution.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.details.solution.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.details.solution.process.map((step, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3 font-bold">{step.step}</div>
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.details?.implementation && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.details.implementation.title}</h3>
            <ul className="space-y-4">
              {project.details.implementation.areas.map((area, idx) => (
                <li key={idx} className="border-l-4 pl-4 border-blue-500 dark:border-blue-400">
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">{area.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">{area.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tech: {area.technologies.join(', ')}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.details?.impact && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.details.impact.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.details.impact.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{metric.number}</div>
                  <div className="text-md font-medium text-gray-900 dark:text-white">{metric.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to projects</Link>
      </div>
    </section>
  );
}