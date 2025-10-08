'use client';
import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';

const MenuBar = () => {
  const [isPadView, setIsPadView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => setIsPadView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    isPadView && (
      <Sheet>
        <SheetTrigger>
          {' '}
          <HiOutlineMenuAlt3 className='w-6 h-6 cursor-pointer hover:bg-white rounded-full p-1 box-content backdrop-blur-md transition-colors duration-100 ease-initial' />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {' '}
              <Image
                className='w-full max-w-30'
                src='/imotech-logo.svg'
                width={200}
                height={50}
                alt='Imotech logo'
              />
            </SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <Button>Get a Free Quote</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  );
};

export default MenuBar;
