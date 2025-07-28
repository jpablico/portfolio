import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Josh Pablico</h3>
        <p className="text-gray-400 mb-6">Automating the boring stuff so teams can move faster</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/jpablico" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/josh-pablico-618108220" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:jpablico27@gmail.com/" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">© 2025 Josh Pablico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}