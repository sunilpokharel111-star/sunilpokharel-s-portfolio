import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="animated-bg min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-20 md:py-0 gap-6 md:gap-12">
      {/* Profile Image */}
      <motion.img 
        src={"/profilepic.png"} 
        alt="Profile" 
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-top shadow-xl flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center md:text-left text-white max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sunil Pokharel</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Full stack Developer(frontend focused)</h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">Creation is the manifestation of unseen realms of thoughts and imagination</p>
      </motion.div>
    </section>
  );
}