import React from 'react';

const Nav = ({addMoney}) => {
  return (
    <nav className='flex items-center justify-between w-9/10 mx-auto py-8'>
          <div>
            <img src="/public/Images/logo.png" alt="" />
          </div>
          <div className=''>
            <ul className='flex gap-5 font-bold items-center'>
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Schedule</a></li>
            <li className='flex gap-x-2 border-1 p-2 rounded-xl'><a className='' href=""> {addMoney} coin</a> <img className='w-6' src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" alt="" /></li>
            </ul>
          </div>
        </nav>
  );
};

export default Nav;