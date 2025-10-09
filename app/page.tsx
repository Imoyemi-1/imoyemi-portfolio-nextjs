import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import QuoteButton from './components/QuoteButton';
import MenuBar from './components/MenuBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

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
        <div>
          <QuoteButton />
          <MenuBar />
        </div>
      </header>
      <Hero />
      <Services />
      <Portfolio />
    </div>
  );
}
