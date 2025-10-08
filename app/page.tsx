import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className='font-instrument'>
      <header className='px-4 py-4.5 flex items-center justify-between max-w-[1152px] mx-auto'>
        <Link href={'/'}>
          <Image
            className='w-full max-w-35'
            src='/imotech-logo.svg'
            width={200}
            height={50}
            alt='Imotech logo'
          />
        </Link>
        <NavBar />
        <HiOutlineMenuAlt3 className='w-6 h-6 cursor-pointer' />
      </header>
      <Hero />
    </div>
  );
}
