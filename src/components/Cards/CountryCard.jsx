import React from 'react'



export const CountryCard = ({flag, countryName, totalValue}) => {
       
  return (
    <>
     <div className="flex items-center justify-around w-60 h-12 my-4 mx-4 bg-white">
      <img className="w-8 h-8" src={flag} alt=""/>
      <div className="p-4">
        <span className="text-xs font-semibold mb-2 mr-3 text-black">{countryName}</span>
        <span className="text-primaryLetterColor font-bold text-xl">{totalValue}</span>
      </div>
    </div>


    </>
  )
}


export default CountryCard;