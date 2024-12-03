import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-bookmark-blue py-8'>
      <div className='container flex flex-col md:flex-row items-center'>
        <div className='flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12'>
          <img src='./imgs/logo-bookmark-white.png' alt='' />

          <ul className='flex text-white uppercase gap-12 text-xs'>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div className='flex gap-10 mt-12 md:mt-0 list-none text-white justify-center items-center text-2xl'>
          <li>
            <i className='fa-brands fa-x-twitter'></i>
          </li>
          <li>
            <i className='fa-brands fa-facebook'></i>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
