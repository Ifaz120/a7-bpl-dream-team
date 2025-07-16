import React from 'react';
import { CiTrash } from "react-icons/ci";


const Selection = ({selection,deleteBtn}) => {
  const {image,battingStyle,name,playerId,role} = selection;
  return (
    <div className='shadow-xl flex justify-between p-4 rounded-xl items-center'>
      <div className='flex gap-x-4'>
      <div className='w-[100px]'>
       <img  className='' src={image} alt="" />
      </div>
      <div className='flex flex-col gap-y-2'>
        <p className='font-bold'>{name}</p>
        <p className='text-gray-600'>{role}</p>
      </div>  

      </div>
      <div>
        <button onClick={() => {deleteBtn(playerId)}} className='text-red-500 text-2xl cursor-pointer '> <CiTrash /> </button>
      </div>
    </div>
  );
};

export default Selection;