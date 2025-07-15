import React from 'react';

const Player = ({card , handleSelectPlayer}) => {
  const {name ,image , country, role , biddingPrice, battingStyle, bowlingStyle} = card;
  return (
    <div className=' mx-auto shadow-xl border-gray-300 p-5 rounded-xl '>
      <div className='flex flex-col gap-y-2'>
        <div>
        <img className='w-[380px] h-[240px] rounded-2xl'  src={image} alt="" />

        </div>
        <p className='flex gap-x-2 font-bold text-lg'><img className='w-7' src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" alt="" /> {name}</p>
        <div className='flex justify-between items-center'>
        <p className='flex gap-x-2'><img className='w-5 text-red-500' src="https://img.icons8.com/?size=100&id=2755&format=png&color=bab4b3" alt="" /> {country}</p>
        <p className='py-2 px-3 bg-gray-200 rounded-lg text-sm font-bold'> {role}</p>

        </div>
        <hr />
        <p className='font-bold'>Rating</p>
        <div className='flex justify-between items-center'>
         <p>{battingStyle}</p>
         <p>{bowlingStyle}</p>
        </div>
        <div className='flex justify-between items-center'>
         <p className='font-bold'>Price: ${biddingPrice}</p>
         
         <button onClick={() => {
          
            handleSelectPlayer(card,biddingPrice,name);

           }} className='p-1 text-sm font-bold text-gray-400 cursor-pointer rounded-lg border-1 hover:bg-gray-200'>Choose Player</button>
         

        </div>
      </div>
    </div>
  );
};

export default Player;