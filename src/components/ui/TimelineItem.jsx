

import { motion } from 'framer-motion';

/**
 * TimelineItem
 * Props:
 *  - title (string)
 *  - subtitle (string)
 *  - period (string)
 *  - description (string)
 *  - bullets (string[])
 *  - tags (string[])
 *  - last (boolean)  // if true, hide the trailing border line
 */
export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  bullets = [],
  tags = [],
  last = false,
}) {
  return (
    <div className={`relative pl-8 pb-8 ${last ? '' : 'border-l-2 border-blue-200 dark:border-blue-900'}`}>
      {/* Dot */}
      <span className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
          <div>
            {title && (
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            )}
            {subtitle && (
              <p className="text-lg text-blue-600 dark:text-blue-400">{subtitle}</p>
            )}
          </div>
          {period && (
            <span className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">{period}</span>
          )}
        </div>

        {description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        )}

        {bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}