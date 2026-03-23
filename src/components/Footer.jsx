import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm justify-center md:justify-start">
          {['Hero','Introduction','Journey','Skills','Contact'].map(section => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:text-accent cursor-pointer transition"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg sm:text-xl">
          <a href="https://github.com/sunilpokharel111-star/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-accent transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sunil-pokharel-077977288/"target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent transition">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@WebForgeAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="hover:text-accent transition">
            <FaYoutube/>
          </a>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm mt-6">&copy; {new Date().getFullYear()} Sunil Pokharel. All rights reserved.</p>
    </footer>
  );
}