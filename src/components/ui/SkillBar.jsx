import { motion } from 'framer-motion';

export default function SkillBar({ name, level, Icon }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-3">
        {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <span className="ml-auto text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
        <motion.div
          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}