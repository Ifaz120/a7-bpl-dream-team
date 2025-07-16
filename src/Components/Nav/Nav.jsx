import React from 'react';

const Nav = ({addMoney}) => {
  return (
    <nav className='flex items-center justify-between w-9/10 mx-auto py-8 sticky top-0 backdrop-blur bg-white/40 z-10 text-xs sm:text-lg'>
          <div>
            <img className='w-20 sm:w-auto' src="/Images/logo.png" alt="" />
          </div>
          <div className=''>
            <ul className='flex gap-x-3 sm:gap-x-8 font-bold items-center'>
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Schedule</a></li>
            <li className='flex sm:gap-x-2   text-xs sm:text-base'><a className='flex gap-x-1 items-center border-1 px-4 py-2 rounded-xl' href=""> {addMoney} coin <img className=' h-6 px-2' src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" alt="" /></a> </li>
            </ul>
          </div>
        </nav>
  );
};

export default Nav;