import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({notify , handleSelectPlayer , setPlayerPrice}) => {
   
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
  return (

    <div className='mx-auto w-9/10 flex flex-col gap-y-8 mt-8'>
      
      
    <div className=' grid grid-cols-3 gap-5'>
      {
        cards.map(card => <Player setPlayerPrice={setPlayerPrice} key={card.playerId} handleSelectPlayer={handleSelectPlayer} notify={notify}  card={card}></Player>)
      }
    </div>
    </div>
    
  );
};

export default Players;