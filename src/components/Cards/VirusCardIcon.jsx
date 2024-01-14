import React from 'react'

const VirusCardIcon = ({ title, value = 0, image }) => {
  return (
    <div className='bg-white flex w-48 max-[450px]:w-[150px] max-[450px]:h-[75px] max-[450px]:pl-[5px] max-[600px]:w-[182px] h-20 relative overflow-hidden rounded-sm shadow-md '>

        <div className='w-[70px] max-[450px]:w-[50px] h-full flex items-center justify-center'>
        <img src={image} alt='covid' className=' w-10 max-[450px]:w-[30px] h-10 max-[450px]:h-[30px] object-cover' />
        </div>

        <div className='w-full h-full flex flex-col justify-center items-left '>
        <h5 className='text-xs font-normal text-primaryLetterColor w-full'>{title}</h5>
        <h3 className='text-2xl max-[450px]:text-lg font-semibold text-primaryLetterColor'>{value}</h3>
        </div>

    </div>
  )
}

export default VirusCardIcon