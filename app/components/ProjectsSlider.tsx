'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import projectsInfo from '@/lib/projects.json';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';

export default () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1, origin: 'center' },
      loop: true,
      mode: 'free-snap',
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className='keen-slider rounded-2xl'>
        {projectsInfo.map((li) => (
          <div
            key={li.id}
            className='keen-slider__slide   relative overflow-hidden rounded-2xl shadow-[0_1px_2px_#090d030d] border border-[rgb(224,224,230)]  bg-white'
          >
            <img
              src={li.image}
              alt={li.title}
              className='w-full h-auto transition-transform duration-500 hover:scale-105 '
            />
            <div className='p-4 space-y-2'>
              <h3 className='text-lg font-semibold'>{li.title}</h3>
              <p className='text-sm text-muted-foreground'>{li.description}</p>
              <div className='mb-4'>
                <h4 className='font-medium text-sm'>Tech Stack:</h4>
                <div className='flex gap-1 flex-wrap'>
                  {li.techStack.map((item, index) => (
                    <Badge
                      key={index}
                      className={`text-${item.color} bg-${item.backgroundColor} rounded-[2px] shadow-[0_1px_2px_#090d030d] border border-[rgb(224,224,230)]`}
                    >
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className='flex gap-2'>
                <Button
                  size={'lg'}
                  className='bg-[rgb(98,101,240)] border rounded-[8px] border-[rgb(81,72,231)] cursor-pointer px-4 py-2.5 text-white font-medium text-base hover:bg-blue-600  transition-colors ease-linear duration-300  '
                >
                  <FaGithub />
                  Source Code
                </Button>
                <Button
                  size={'lg'}
                  className='bg-white border rounded-[8px] border-[rgb(201,201,210)] cursor-pointer px-4 py-2.5 text-[rgb(46,44,42)] font-medium text-base hover:border-gray-600  transition-colors ease-linear duration-300  '
                >
                  <MdArrowOutward />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
