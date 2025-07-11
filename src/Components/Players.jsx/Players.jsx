import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
   
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
  return (

    <div className='mx-auto w-9/10 flex flex-col gap-y-8 mt-8'>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>Available Players</h2>
        <div>
         <button className='py-2 cursor-pointer px-3 rounded-l-xl bg-[#E7FE29] font-bold'>Available</button>
         <button className='py-2 cursor-pointer px-3 rounded-r-xl bg-gray-200 font-bold'>Selected</button>
        </div>
      </div>
      
    <div className=' grid grid-cols-3 gap-5'>
      {
        cards.map(card => <Player card={card}></Player>)
      }
    </div>
    </div>
    
  );
};

export default Players;