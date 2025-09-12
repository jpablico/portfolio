import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target;
              target.src = '/placeholder-image.jpg';
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              Details
            </span>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={20} /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
