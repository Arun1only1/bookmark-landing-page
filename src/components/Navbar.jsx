import React from 'react';

const Navbar = () => {
  return (
    <nav className='container flex justify-center items-center py-4 mt-4  sm:mt-12'>
      <div className='py-1 flex '>
        <img src='./imgs/logo-bookmark.svg' alt='' />
      </div>

      <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs'>
        <li className='cursor-pointer'>features</li>
        <li className='cursor-pointer'>pricing</li>
        <li className='cursor-pointer'>contact</li>
        <li className='cursor-pointer'>Features</li>

        <button
          type='button'
          className='text-white bg-bookmark-red px-7 py-3 rounded-md uppercase'
        >
          login
        </button>
      </ul>

      <div className='sm:hidden  flex flex-1 justify-end'>
        <i className='fa-solid fa-bars'></i>
      </div>
    </nav>
  );
};

export default Navbar;
