import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 md:py-0 relative overlay-bg"
      style={{
        backgroundImage: "url('/banepa.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="text-center text-white relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hello, I'm Sunil!
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl mb-6">
          Turning ideas into real digital experiences
        </h3>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
          I was raised in the heart of Banepa, sitting on the terrace and watching the hills. I learned to notice quiet connections between people and fleeting moments that might be the last time they happen. I’m still figuring out who I want to be, but I keep creating, showing up, and moving forward — staying in the flow of becoming, even when it doesn’t feel like enough.
        </p>
      </motion.div>
    </section>
  );
}