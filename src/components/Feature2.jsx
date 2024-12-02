import React from 'react';

const Feature2 = () => {
  return (
    <section className='bg-bookmark-white py-20 mt-20 lg:mt-52 relative'>
      {/* heading */}

      {/* Feature 1 */}
      <div className='relative mt-20 lg:mt-24'>
        <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
          {/* Image */}
          <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
            <img
              src='./imgs/illustration-features-tab-2.png'
              className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
              alt=''
            />
          </div>
          {/* Content */}

          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h1 className='text-3xl text-bookmark-blue'>Intelligent search</h1>
            <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <button
              type='button'
              className='btn btn-purple hover:bg-bookmark-white hover:text-black uppercase'
            >
              more info
            </button>
          </div>
        </div>
      </div>

      <div className='hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4  -bottom-24 -right-36'></div>
    </section>
  );
};

export default Feature2;
