export default function ResumePage() {
  return (
    <section id="resume" className="pt-24 pb-16 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Résumé</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download a PDF copy or view it inline below.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/resume.pdf" download className="bg-blue-600 dark:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
            Download PDF
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Open in new tab
          </a>
        </div>
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[80vh] border border-gray-300 dark:border-gray-700 rounded-md bg-white"
        />
      </div>
    </section>
  );
}