import { motion } from 'framer-motion';
import { FaGithub, FaCertificate } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 90, proof: { github: 'https://github.com/username/react-project', certificate: '' }, alt: 'React logo' },
  { name: 'Tailwind CSS', level: 85, proof: { github: 'https://github.com/username/tailwind-demo', certificate: '' }, alt: 'Tailwind logo' },
  { name: 'python', level: 75, proof: { github: 'https://github.com/sunilpokharel111-star/auto_inventory_system', certificate: '' }, alt: 'python logo' },
    { name: 'fastapi', level: 75, proof: { github: 'https://github.com/sunilpokharel111-star/auto_inventory_system', certificate: '' }, alt: 'fastapi logo' },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 sm:px-6 py-16 md:py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-between relative group"
          >
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.name}</h3>
              {/* Animated Skill Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 rounded-full bg-accent"
                  aria-label={`${skill.name} skill level ${skill.level}%`}
                />
              </div>
            </div>
            {/* Proof Links */}
            <div className="mt-4 flex space-x-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
              {skill.proof.github && (
                <a href={skill.proof.github} target="_blank" rel="noopener noreferrer" aria-label={`${skill.name} GitHub link`}>
                  <FaGithub className="text-white w-6 h-6 hover:text-accent" />
                </a>
              )}
              {skill.proof.certificate && (
                <a href={skill.proof.certificate} target="_blank" rel="noopener noreferrer" aria-label={`${skill.name} certificate link`}>
                  <FaCertificate className="text-white w-6 h-6 hover:text-accent" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle moving gradient background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 -z-10"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}