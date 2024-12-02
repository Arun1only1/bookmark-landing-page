import React from 'react';

const Features = () => {
  return (
    <section className='bg-bookmark-white py-20 mt-20 lg:mt-60 relative'>
      {/* heading */}
      <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
        <h1 className='text-3xl text-center text-bookmark-blue'>Features</h1>
        <p className='text-center text-bookmark-grey mt-4'>
          Our aim is to make it quick and easy for you to access your favorite
          websites.Your bookmarks sync between your devices so you can access
          them on the go.,
        </p>
      </div>
      {/* Feature 1 */}
      <div className='relative mt-20 lg:mt-24'>
        <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
          {/* Image */}
          <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
            <img
              src='./imgs/illustration-features-tab-1.png'
              className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
              alt=''
            />
          </div>
          {/* Content */}

          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h1 className='text-3xl text-bookmark-blue'>
              Bookmark in one click
            </h1>
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

      <div className='hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4  -bottom-24 -left-36'></div>
    </section>
  );
};

export default Features;
