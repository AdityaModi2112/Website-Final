'use client';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

export default function HeroSection() {
  const { scrollY } = useViewportScroll();
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);
  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  const [firstSectionHeight, setFirstSectionHeight] = useState(0);
  const fontSize = useTransform(scrollY, [0, firstSectionHeight * 0.91], ['50rem', '16rem']);

  const updateHeight = () => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => setShowNavbarLogo(v > firstSectionHeight * 0.89));
    return () => unsubscribe();
  }, [scrollY, firstSectionHeight]);

  return (
    <>
      {showNavbarLogo && (
        <div>
          <Navbar />
        </div>
      )}
      <div
        ref={firstSectionRef}
        className="bg-cover bg-center h-screen w-full flex flex-col md:items-start items-center md:justify-end justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/dog.jpg')",
        }}>
        <motion.img src="/Group.png" alt="MyPerro logo" className="md:pl-20 md:pb-2 p-5" style={{ width: fontSize }} />
      </div>
    </>
  );
}
