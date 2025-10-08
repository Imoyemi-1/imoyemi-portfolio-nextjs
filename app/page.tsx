import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function Home() {
  return (
    <div className='font-instrument'>
      <header className='p-4 flex items-center justify-between'>
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
    </div>
  );
}
