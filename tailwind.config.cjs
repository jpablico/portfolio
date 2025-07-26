import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <Link href="/">
          <a className="text-lg font-semibold">My Portfolio</a>
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
          <Link href="/projects">
            <a className="hover:underline">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>

          {/* Desktop theme toggle button removed */}
        </nav>

        <div className="md:hidden flex items-center">
          {/* Mobile menu button */}
          <button
            type="button"
            className="mr-2 rounded-md p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile theme toggle button removed */}
        </div>
      </div>
    </header>
  );
}