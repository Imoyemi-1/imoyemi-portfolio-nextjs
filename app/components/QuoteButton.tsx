'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const QuoteButton = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    !isMobile && <Button className=' hidden md:block'>Get a Free Quote</Button>
  );
};

export default QuoteButton;
