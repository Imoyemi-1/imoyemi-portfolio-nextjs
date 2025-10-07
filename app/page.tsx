import Image from 'next/image';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className='font-instrument'>
      <header>
        <Image
          src='/imotech-logo.svg'
          width={200}
          height={50}
          alt='Imotech logo'
        />
        <NavBar />
      </header>
    </div>
  );
}
