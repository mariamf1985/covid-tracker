import React from 'react'

export const CounterCard = () => {
  return (
    <div className="flex items-center justify-around w-60 h-12 bg-colorCard1">
        <h6 className="text-primaryLetterColor font-bold text-sm">Total Case</h6>
        <div>
        <span className="mr-3 bg-white text-xs text-gray-400">+123</span>
        <span className="text-red-500 font-bold text-xl">575101133</span>
        </div>
    </div>
  )
}
