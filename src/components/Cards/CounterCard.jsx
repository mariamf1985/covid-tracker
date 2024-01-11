import React from 'react'


export const CounterCard = ({bgColor, title, numColor, dayNum, totalValue, borderHoverColor}) => {
    const valueStyle1 = {backgroundColor: bgColor, border: '2px solid transparent'}
    const valueStyle2 = {color: numColor}
    return (
      <div style={valueStyle1}
        className="flex items-center justify-between w-[90%] h-16 p-4 rounded transition-transform transform hover:scale-110"
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `2px solid ${borderHoverColor}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '2px solid transparent';
        }}
      >
        <h6 className="text-primaryLetterColor font-bold text-[15px]">{title}</h6>
        <div className="flex items-center">
          <span className="mr-4 bg-white text-xs text-gray-400">{dayNum}</span>
          <span style={valueStyle2} className="font-bold text-[28px]">
            {totalValue}
          </span>
        </div>
      </div>
      );
    };
    


export default CounterCard;