import React from 'react';

const VirusCardBackground = ({ title, value, image, valueColor }) => {
  const valueStyle = { color: valueColor };
  return (
    <div className='bg-white w-52 h-24 relative overflow-hidden rounded-sm shadow-md m-3.5'>

      <div className='absolute bottom-2 -right-6 w-28 h-28 opacity-10'>
        <img src={image} alt='covid' className='w-full h-full object-cover' />
      </div>

      <div className='relative z-10 w-full h-full flex flex-col justify-between items-left'>
        <h5 className='text-sm font-semibold text-gray-800 w-full border-b-2 pt-2 pl-2.5 pb-3'>{title}</h5>
        <h3  style={valueStyle} className='text-3xl font-bold p-2.5'>{value}</h3>
      </div>

    </div>
  );
};

export default VirusCardBackground;