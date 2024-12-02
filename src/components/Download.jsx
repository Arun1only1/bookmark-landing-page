import React from 'react';

const Download = () => {
  return (
    <section className='py-20 mt-20'>
      <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
        <h1 className='text-3xl text-center text-bookmark-blue'>
          Download the extensions
        </h1>
        <p className='text-center text-bookmark-grey mt-4'>
          {`We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like to prioritize.`}
        </p>
      </div>
      {/* cards */}
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'></div>
    </section>
  );
};

export default Download;
