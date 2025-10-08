import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LogoSlider from './LogoSlider';

const Hero = () => {
  return (
    <section className='flex flex-col bg-white shadow-[0_1px_2px_#090d030d] m-4 px-4 py-15 rounded-xl border border-[rgb(224,224,230)] item-center gap-18 h-fit max-w-[1152px] lg:mx-auto'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 items-center'>
          <Badge className='backdrop-blur-3xl shadow bg-[#f1f1f4] rounded-3xl px-4 py-1 flex items-center gap-2 text-[rgb(27,27,37)]'>
            <div className='h-2 w-2 rounded-full bg-green-600'></div>
            Crafting Unique Brand Identities
          </Badge>
          <h1 className='font-instrument scroll-m-20 text-center text-[2.6rem]/14 font-semibold tracking-tight text-balance text-[rgb(20,17,16)] '>
            Branding You Need.{' '}
            <span className='text-[rgb(148,148,158)]'>
              Website <br /> That Work
            </span>
          </h1>
          <p className='text-[rgb(69,69,79)] text-center text-pretty'>
            Elevate your brand with custom identity and high-performance
            website. From strategy to lunch,we builds
            beautiful,conversion-focused designs that help your business grow.
          </p>
        </div>
        <div className='flex gap-4 flex-col'>
          <Button
            size='lg'
            className='bg-white border rounded-[8px] border-[rgb(201,201,210)] cursor-pointer px-4 py-2.5 text-[rgb(46,44,42)] font-medium text-base hover:border-gray-600  transition-colors ease-linear duration-300  '
          >
            Get Started Now
          </Button>
          <Button
            className='bg-[rgb(98,101,240)] border rounded-[8px] border-[rgb(81,72,231)] cursor-pointer px-4 py-2.5 text-white font-medium text-base hover:bg-blue-600  transition-colors ease-linear duration-300  '
            size='lg'
          >
            View Work
          </Button>
        </div>
      </div>
      <div className='flex flex-col  items-center gap-8 px-6'>
        <h6 className='text-[rgb(69,69,79)] font-medium'>
          Powered by modern tools
        </h6>

        <LogoSlider />
      </div>
    </section>
  );
};

export default Hero;
