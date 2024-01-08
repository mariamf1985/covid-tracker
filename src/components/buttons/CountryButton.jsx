import React from 'react'

const CountryButton = ({ image, country, value }) => {
    return (
        <button class="flex items-center border text-primaryLetterColor px-3 py-2">
            <div class="rounded-full overflow-hidden mr-2">
      
      <img src="{image}" alt="flag" class="w-8 h-8"/>
    </div>
    <div class="flex flex-col justify-start">
      <span class="text-left text-sm">{country}</span>
      <span class="text-left font-semibold text-lg">{value}</span>
    </div>
        </button>
    )
}

export default CountryButton