import React from 'react'

const CountryButton = ({ image, country, value }) => {
  return (
    <button className="flex items-center bg-white border text-primaryLetterColor 2xl:w-[158px] xl:w-[130px]  h-12 px-2 py-2 mt-3 ml-3 mr-2 transform transition-transform hover:scale-110">
      <div className="rounded-full overflow-hidden mr-2 ">
        <img src={image} alt="flag" className="w-7 h-7" />
      </div>
      <div className="flex flex-col justify-start">
        <span className="text-left text-xs 2xl:text-[11px] font-semibold">{country}</span>
        <span className="text-left font-semibold text-[16px]">{value}</span>
      </div>
    </button>
  )
}

export default CountryButton