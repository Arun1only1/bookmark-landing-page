import React from 'react';

const Hero = () => {
  return (
    <section className='relative '>
      <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
        <div className='flex flex-1 flex-col items-center lg:items-start'>
          <h2 className='text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
            A Simple Bookmark Manager
          </h2>
          <p className='text-bookmark-grey text-lg text-center lg:text-left mb-6'>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and load instantly. Try it for free.
          </p>
          <div className='flex justify-center flex-wrap gap-6'>
            <button
              className='btn btn-purple uppercase hover:bg-bookmark-white hover:text-black'
              type='button'
            >
              Get it on chrome
            </button>
            <button className='btn btn-white uppercase hover:bg-bookmark-purple hover:text-white'>
              Get it on firefox
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
          <img
            src='./imgs/hero-bg.png'
            className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
            alt=''
          />
        </div>
      </div>

      <div className='hidden md:block  bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36 overflow-hidden'></div>
    </section>
  );
};

export default Hero;
