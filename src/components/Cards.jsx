import React from 'react';

const Cards = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg  mb-16'>
      {/* Card 1 */}
      <div className='flex flex-col rounded-md shadow-md'>
        <div className='p-6 flex flex-col items-center'>
          <img src='./imgs/logo-chrome.svg' alt='' />
          <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>
            Add to chrome
          </h3>
          <p className='mb-2 text-bookmark-grey font-light'>
            Minimum version 62
          </p>
          <hr className='border-b border-bookmark-white' />

          <div className='flex p-6'>
            <button
              type='button'
              className='flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black uppercase'
            >
              add & install extension
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className='flex flex-col rounded-md shadow-md '>
        <div className='p-6 flex flex-col items-center'>
          <img src='./imgs/logo-firefox.svg' alt='' />
          <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>
            Add to firefox
          </h3>
          <p className='mb-2 text-bookmark-grey font-light'>
            Minimum version 62
          </p>

          <hr className='border-b border-bookmark-white' />

          <div className='flex p-6'>
            <button
              type='button'
              className='flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black uppercase'
            >
              add & install extension
            </button>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className='flex flex-col rounded-md shadow-md '>
        <div className='p-6 flex flex-col items-center'>
          <img src='./imgs/logo-opera.svg' alt='' />
          <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>Add to opera</h3>
          <p className='mb-2 text-bookmark-grey font-light'>
            Minimum version 62
          </p>

          <hr className='border-b border-bookmark-white' />

          <div className='flex p-6'>
            <button
              type='button'
              className='flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black uppercase'
            >
              add & install extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
