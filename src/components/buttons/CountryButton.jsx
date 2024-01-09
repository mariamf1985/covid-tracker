import React from 'react'

const CountryButton = ({ image, country, value }) => {
  return (
    <button className="flex items-center border text-primaryLetterColor px-3 py-2">
      <div className="rounded-full overflow-hidden mr-2">

        <img src={image} alt="flag" className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-start">
        <span className="text-left text-sm">{country}</span>
        <span className="text-left font-semibold text-lg">{value}</span>
      </div>
    </button>
  )
}

export default CountryButton