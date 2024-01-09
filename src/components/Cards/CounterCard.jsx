import React from 'react'


export const CounterCard = ({bgColor, tittle, numColor, dayNum, totalValue}) => {
    const valueStyle1 = {backgroundColor: bgColor}
    const valueStyle2 = {color: numColor}
  return (
    <>
    <div style={valueStyle1} className= "flex items-center justify-around w-60 h-12 my-4 mx-4">
        <h6 className="text-primaryLetterColor font-bold text-sm">{tittle}</h6>
        <div>
        <span className="mr-3 bg-white text-xs text-gray-400">{dayNum}</span>
        <span style={valueStyle2} className= "font-bold text-xl">{totalValue}</span>
        </div>
    </div>

    </>
  )
}


export default CounterCard;