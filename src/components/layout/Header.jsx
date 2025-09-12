import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
//import useTheme from '../../hooks/useTheme';

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Fallback to hook if parent didn't pass darkMode/setDarkMode
  //const { theme, toggle } = useTheme();
  //const effectiveDark = theme === 'dark';
  //const toggleDark = toggle;

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const navItems = [
    { to: '/', label: 'home', section: 'home' },
    { to: '/about', label: 'about' },
    { to: '/projects', label: 'projects' },
    { to: '/resume', label: 'resume' },
    { to: '/contact', label: 'contact' }
  ];

  const isActive = (to, section) => {
    if (to === '/') {
      return location.pathname === '/' && activeSection === section;
    }
    return location.pathname.startsWith(to);
  };

  const linkClasses = (active) =>
    `capitalize transition-colors duration-200 ${
      active
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2 hover:text-white dark:hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-10 w-auto fill-blue-500 dark:fill-blue-400 transition-colors duration-200">
              <circle cx="50" cy="50" r="40" />
            </svg>
            <span className="hidden md:inline text-xl font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-200">
              Josh Pablico
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ to, label, section }) => (
              <Link key={to} to={to} className={linkClasses(isActive(to, section))}>
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex items-center md:hidden">
            <div className="w-10 h-10 flex justify-center items-center">
              <button onClick={() => setIsMenuOpen((m) => !m)} className="w-full h-full">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block w-full text-left py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}