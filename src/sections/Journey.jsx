import { motion } from 'framer-motion';
import milestoneImg from '../assets/graduation.jpg';
import milestoneImg2 from '../assets/peoplescollage.jpg';
import milestoneImg3 from '../assets/firstapplication.png';
import milestoneImg5 from '../assets/youtubecareer.png';
import milestoneImg4 from '../assets/autoinventorysystem.png';
import milestoneImg6 from '../assets/myportfolio.jpeg';


const milestones = [
  { image: milestoneImg, title: 'High School Graduation', description: '(may 2025) Excelled in academics and leadership', alt: 'Graduation cap on stage' },
  { image: milestoneImg2, title: 'Started University', description: '(august 2025)Major in mathematics', alt: 'University campus view' },
  { image: milestoneImg3, title: 'First Personal Project', description: '(june 2025)built a simple desktop application(pos system)', alt: 'photo of app' },
  { image: milestoneImg4, title: 'Developed Auto Inventory System', description: '(january 2026) created my first fullstack comprehensive inventory management solution', alt: 'inventory system interface' },
  { image: milestoneImg5, title: 'Started YouTube', description: '(march 2026) began creating business+tech focused content', alt: 'youtube dashboard' },
  { image: milestoneImg6, title: 'Built My Portfolio', description: '(march 2026) created my personal website to showcase my work', alt: 'portfolio website' },
];

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen flex flex-col px-4 sm:px-6 py-16 md:py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">My Journey</h2>

      <div className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide scroll-snap-x">
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 scroll-snap-start bg-gray-800 rounded-xl shadow-lg relative"
          >
            <img
              src={m.image}
              alt={m.alt}
              className="w-full h-40 sm:h-48 object-cover object-[100%_20%] rounded-t-xl"
              loading="lazy"
            />
            <div className="p-4 text-white">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{m.title}</h3>
              <p className="text-xs sm:text-sm md:text-base">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional subtle parallax background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 -z-10"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}