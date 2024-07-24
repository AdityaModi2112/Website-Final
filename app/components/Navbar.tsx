'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const ourServicesSection = document.getElementById('our-services');
      const navbar = document.getElementById('navbar');

      if (ourServicesSection && navbar) {
        const sectionBottom = ourServicesSection.offsetTop + ourServicesSection.offsetHeight;

        if (currentScrollPos > sectionBottom) {
          if (prevScrollpos > currentScrollPos) {
            navbar.style.top = '0';
          } else {
            navbar.style.top = '-100px';
          }
        }
      }

      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  return (
    <nav id="navbar" style={{ transition: 'top 0.5s ease-in-out' }} className="fixed top-0 left-0 right-0 min-h-[8vh] bg-[#FAE9DA] p-2 flex items-center justify-between z-20 font-poppins shadow-lg">
      <div className="flex justify-between items-center w-full md:w-[50%]">
      <Image src="/Logo.png" width={180} height={180} alt="Logo" className="w-24 h-8 md:w-[11.25rem] md:h-[3.25rem] md:ml-[3.75rem]" />
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>
      {/* Adjusted: Hide original navbar links on mobile when menu is open */}
      <div className={`hidden md:flex justify-center items-center space-x-12 font-semibold mr-[2rem] ${isMenuOpen ? 'hidden' : 'flex'}`}>
        <Link href="#" className="text-zinc-800">
          HOME
        </Link>
        <Link href="#" className="text-zinc-800">
          ABOUT US
        </Link>
        <Link href="#" className="text-zinc-800">
          CONTACT US
        </Link>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Login</button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 right-0 mt-[8vh] mr-2 p-3 bg-white rounded-lg shadow-lg md:hidden">
          <div className="flex flex-col justify-between items-start space-y-2 text-sm">
            <Link href="#">HOME</Link>
            <Link href="#">ABOUT US</Link>
            <Link href="#">CONTACT US</Link>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-lg">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
