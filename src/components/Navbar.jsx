import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export default function Navbar() {
  const sections = ['hero','introduction','journey','skills','contact'];
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight/2;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if(el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if(scrollPos >= top && scrollPos < bottom){
            setActive(sec);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-black/60 backdrop-blur-md z-50 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg sm:text-xl">MyPortfolio</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 lg:space-x-6 text-white text-sm lg:text-base">
        {sections.map(section => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className={`cursor-pointer hover:text-accent transition ${active===section?'text-accent font-semibold':''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <MdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 md:hidden mt-1">
          <div className="flex flex-col space-y-4 p-4">
            {sections.map(section => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleLinkClick}
                className={`cursor-pointer hover:text-accent transition text-white ${active===section?'text-accent font-semibold':''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}