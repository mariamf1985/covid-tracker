import React from 'react'



export const CountryCard = ({flag, countryName, totalValue}) => {
       
  return (
    <>
     <div className="flex items-center justify-between w-[90%] h-12 p-4 bg-white rounded transition-transform transform hover:scale-105 shadow">
      <img className="w-[35px] h-6 rounded" src={flag} alt=""/>
      <div className="w-full flex justify-between items-baseline">
        <span className="text-sm pl-4 font-normal mb-2 mr-3 text-black">{countryName}</span>
        <span className="text-primaryLetterColor font-bold text-lg">{totalValue}</span>
      </div>
    </div>


    </>
  )
}


export default CountryCard;