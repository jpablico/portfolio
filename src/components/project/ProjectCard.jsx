import { Link, useNavigate } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Don't navigate if clicking on the action buttons
    if (e.target.closest('.action-buttons')) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation(); // Prevent card click
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full flex flex-col cursor-pointer"
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target;
            target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm h-fit"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-auto action-buttons">
          <Link 
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            Details
          </Link>
          <button
            onClick={(e) => handleLinkClick(e, project.github)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={20} /> Code
          </button>
          {project.live && (
            <button
              onClick={(e) => handleLinkClick(e, project.live)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={20} /> Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}