

/**
 * TechBadge
 * Props:
 *  - label (string)
 *  - Icon (React component, optional)
 *  - className (string, optional)
 */
export default function TechBadge({ label, Icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium ${className}`}
    >
      {Icon && <Icon size={14} className="opacity-80" />}
      {label}
    </span>
  );
}