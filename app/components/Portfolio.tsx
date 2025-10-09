import ProjectsSlider from './ProjectsSlider';

const Portfolio = () => {
  return (
    <section className='py-16 px-4 flex flex-col gap-12'>
      <header className='flex flex-col items-center gap-4'>
        <h2 className='text-center text-[rgb(20,17,16)] text-3xl font-semibold'>
          Glimpse into what I build
        </h2>
        <p className='text-[rgb(69,69,79)] max-w-[32.5rem] text-center'>
          A showcase of projects crafted with creativity, precision, innovation
          and purpose.
        </p>
      </header>
      <ProjectsSlider />
    </section>
  );
};

export default Portfolio;
