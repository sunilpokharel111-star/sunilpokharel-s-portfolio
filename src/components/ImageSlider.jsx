import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white bg-black/60 backdrop-blur-sm p-3 sm:p-4 rounded-full hover:bg-accent/80 transition-all duration-300 z-10 shadow-lg hover:scale-110"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-lg sm:text-xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white bg-black/60 backdrop-blur-sm p-3 sm:p-4 rounded-full hover:bg-accent/80 transition-all duration-300 z-10 shadow-lg hover:scale-110"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-lg sm:text-xl" />
      </button>

      {/* Images */}
      <div className="overflow-hidden rounded-xl shadow-2xl">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: idx === current ? 1 : 0,
              x: idx === current ? 0 : idx < current ? -100 : 100
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={idx === current ? 'block w-full' : 'hidden'}
          >
            <img
              src={img.src}
              alt={img.alt || `Slide ${idx + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-accent scale-125'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}