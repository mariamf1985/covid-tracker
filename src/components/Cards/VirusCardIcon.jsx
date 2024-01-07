import React from 'react'

const VirusCardIcon = ({ title, value = 0, image }) => {
  return (
    <div className='bg-white flex w-48 h-20 relative overflow-hidden rounded-sm shadow-md '>

        <div className='w-[70px] h-full flex items-center justify-center'>
        <img src={image} alt='covid' className=' w-10 h-10 object-cover' />
        </div>

        <div className='w-full h-full flex flex-col justify-center items-left '>
        <h5 className='text-xs font-normal text-primaryLetterColor w-full'>{title}</h5>
        <h3 className='text-2xl font-semibold text-primaryLetterColor'>{value}</h3>
        </div>

    </div>
  )
}

export default VirusCardIcon