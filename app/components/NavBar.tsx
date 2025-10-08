'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    !isMobile && (
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'#services'}>Services</Link>
        <Link href={'#about'}>About us</Link>
        <Link href={'#portfolio'}>Portfolio</Link>
        <Link href={'#contact'}>Contact</Link>
      </nav>
    )
  );
};

export default NavBar;
