import React from 'react';
import './CountrySelect.css';

const CountrySelect = ({countries = [] , chooseCountry}) => {
  
  const updateSelectedCountryValue = (event) => {
    chooseCountry(event.target.value)
  }

  return (
    <>
      <select id="countrySelect" onChange={updateSelectedCountryValue} className='countrySelect md:w-[250px] max-[600px]:w-[98%] max-[600px]:mb-3 h-10 pt-[8px] pb-[8px] pl-[25px] pr-[25px] bg-white font-medium '>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.country} value={country.countryInfo._id}>{country.country}</option>
        ))}
      </select>
    </>
  );
};

export default CountrySelect;