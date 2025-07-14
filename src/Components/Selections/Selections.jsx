import React from 'react';
import Selection from '../Selection/Selection';

const Selections = ({playerSelect}) => {
  return (
    <div className='w-9/10 mx-auto my-10 flex flex-col gap-y-5'>
      {
        playerSelect.length === 0 
          ? <p>No players selected yet.</p>
          : playerSelect.map((selection, idx) => (
              <Selection key={idx} selection={selection} />
          ))
      }
    </div>
  );
};

export default Selections;