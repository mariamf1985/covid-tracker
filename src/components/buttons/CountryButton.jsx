import React from 'react'

const CountryButton = ({ image, country, value }) => {
  return (
    <button className="flex items-center bg-primarybackground border text-primaryLetterColor h-12 w-40 px-3 py-2 mt-3 ml-4 mr-2 transform transition-transform hover:scale-110">
      <div className="rounded-full overflow-hidden mr-2">

        <img src={image} alt="flag" className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-start">
        <span className="text-left text-xs font-semibold">{country}</span>
        <span className="text-left font-semibold text-lg">{value}</span>
      </div>
    </button>
  )
}

export default CountryButton