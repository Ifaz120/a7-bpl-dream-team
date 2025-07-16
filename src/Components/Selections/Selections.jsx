import React from 'react';
import Selection from '../Selection/Selection';

const Selections = ({playerSelect,handleClick,setShowDiv,deleteBtn}) => {
  return (
    <div className='w-9/10 mx-auto my-10 flex flex-col gap-y-5 min-h-50 mb-50'>
      {
        playerSelect.length === 0 
          ? <p></p>
          : playerSelect.map((selection, idx) => (
              <Selection  deleteBtn={deleteBtn} key={idx} selection={selection} />
          ))
      }
      <div>

      <button onClick={()=> {
                handleClick('Available');
                setShowDiv(true)

              }} className= 'py-2 cursor-pointer px-4 rounded-xl bg-[#E7FE29] font-bold '>Add more players</button>
      </div>
    </div>
  );
};

export default Selections;