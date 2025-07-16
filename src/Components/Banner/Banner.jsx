import React from 'react';

const Banner = ({claimMoney}) => {
  return (
    <div className="mt-8 rounded-2xl bg-[url('/public/Images/bg-shadow.png')] bg-black bg-cover bg-center mx-auto h-[500px] w-9/10 justify-center items-center flex flex-col gap-y-8 text-center ">
      <img className='w-1/2 sm:w-auto' src="/public/Images/banner-main.png" alt="" />
      <h1 className='text-xl px-5 sm:text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <h4 className=' sm:text-xl px-5 text-gray-300 font-bold'>Beyond Boundaries Beyond Limits</h4>
      <button onClick={claimMoney} className=' p-3 rounded-xl bg-[#E7FE29] cursor-pointer hover:bg-[#c3c4bb] font-bold'>Claim Free Credit</button>
    </div>
  );
};

export default Banner;