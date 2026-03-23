import { motion } from 'framer-motion';

export default function Card({ image, title, description, alt, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex-shrink-0 w-72 md:w-80 scroll-snap-start bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      {image && (
        <img
          src={image}
          alt={alt || title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline mt-2 block"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}