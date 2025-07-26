

import { useForm } from '@formspree/react';

/**
 * Reusable ContactForm component powered by Formspree
 * Props:
 *  - formId (string) default 'mqalqyvw'
 *  - className (string)
 */
export default function ContactForm({ formId = 'mqalqyvw', className = '' }) {
  const [state, handleSubmit] = useForm(formId);

  return (
    <form className={`space-y-6 ${className}`} onSubmit={handleSubmit}>
      <FormField id="name" label="Name" type="text" placeholder="Your name" />
      <FormField id="email" label="Email" type="email" placeholder="your.email@example.com" />
      <FormField id="subject" label="Subject" type="text" placeholder="What's this about?" />
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 dark:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 disabled:opacity-60"
      >
        {state.submitting ? 'Sending…' : 'Send Message'}
      </button>

      {state.succeeded && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-2">Thanks! Your message has been sent.</p>
      )}
      {state.errors && state.errors.length > 0 && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-2">There was a problem sending your message.</p>
      )}
    </form>
  );
}

function FormField({ id, label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder={placeholder}
      />
    </div>
  );
}