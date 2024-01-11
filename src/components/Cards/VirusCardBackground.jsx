import React from 'react';
import './VirusCardBackground.css'

const VirusCardBackground = ({ title, value = 0, image, valueColor }) => {
  const valueStyle = { color: valueColor };
  return (
    <div className='bg-white w-52 h-24  max-[450px]:w-[140px] max-[450px]:h-[85px] max-[600px]:w-44  relative overflow-hidden rounded-sm shadow-md transition-transform duration-500 ease-in-out transform hover:-translate-y-2 virusCardBgBox'>

      <div className='absolute bottom-2 -right-6 w-28 h-28 opacity-10 max-[600px]:bottom-0 max-[450px]:w-24 max-[450px]:h-24 virusImage'>
        <img src={image} alt='covid' className='w-full h-full object-cover ' />
      </div>

      <div className='relative z-10 w-full h-full flex flex-col justify-between items-left'>
        <h5 className='text-sm  max-[450px]:text-[13px]  font-semibold text-gray-800 w-full border-b-2 pt-2 pl-2.5 pb-3'>{title}</h5>
        <h3  style={valueStyle} className='text-3xl max-[450px]:text-2xl font-bold p-2.5'>{value}</h3>
      </div>

    </div>
  );
};

export default VirusCardBackground;