import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useForm } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mqalqyvw');
  return (
    <section id="contact" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                I'd love to hear from you. Reach out through any channel.
              </p>
            </div>

            <div className="space-y-6">
              <ContactLink icon={<Mail size={24} />} title="Email" value="alex.johnson@example.com" href="mailto:alex.johnson@example.com" />
              <ContactLink icon={<Linkedin size={24} />} title="LinkedIn" value="linkedin.com/in/alexjohnson" href="#" />
              <ContactLink icon={<Github size={24} />} title="GitHub" value="github.com/alexjohnson" href="#" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <FormField id="name" label="Name" type="text" placeholder="Your name" />
              <FormField id="email" label="Email" type="email" placeholder="your.email@example.com" />
              <FormField id="subject" label="Subject" type="text" placeholder="What's this about?" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 dark:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 disabled:opacity-60">
                Send Message
              </button>
              {state.succeeded && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">Thanks! Your message has been sent.</p>
              )}
              {state.errors && state.errors.length > 0 && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">There was a problem sending your message.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, title, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </a>
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