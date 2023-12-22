import React from 'react';
import covid from '../../assets/images/icons/covid-blue.svg';

const VirusCardBackground = () => {
  return (
    <div className='bg-white w-52 h-24 relative overflow-hidden rounded-sm shadow-md '>

      <div className='absolute bottom-2 -right-6 w-28 h-28 opacity-25'>
        <img src={covid} alt='covid' className='w-full h-full object-cover' />
      </div>

      <div className='relative z-10 w-full h-full flex flex-col justify-between items-left'>
        <h5 className='text-sm font-semibold text-gray-800 w-full border-b-2 pt-2 pl-2.5 pb-3'>Total Cases</h5>
        <h3 className='text-3xl font-bold text-secondarybg p-2.5'>5871977</h3>
      </div>

    </div>
  );
};

export default VirusCardBackground;