import React from 'react'



export const CountryCard = ({flag, countryName, totalValue}) => {
       
  return (
    <>
     <div className="flex items-center justify-between w-[90%] h-12 p-4 bg-white rounded transition-transform transform hover:scale-110">
      <img className="w-[50px] h-8 rounded" src={flag} alt=""/>
      <div className="w-full flex justify-between items-center">
        <span className="text-ms pl-4 font-normal mb-2 mr-3 text-black">{countryName}</span>
        <span className="text-primaryLetterColor font-bold text-xl">{totalValue}</span>
      </div>
    </div>


    </>
  )
}


export default CountryCard;