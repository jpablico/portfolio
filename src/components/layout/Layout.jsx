import { Outlet, useLocation } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import useScrollSpy from '../../hooks/useScrollSpy';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  // Only run scrollspy on the home page
  const sections = location.pathname === '/' ? ['home','about','education','experience','projects','skills','contact'] : [];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}