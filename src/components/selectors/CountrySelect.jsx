import React from 'react';
import './CountrySelect.css';

const CountrySelect = ({countries = [] , updateSelectedCountry}) => {
  return (
    <>
      <select id="countrySelect" onChange={updateSelectedCountry} className='countrySelect w-[250px] pt-[8px] pb-[8px] pl-[25px] pr-[25px] bg-white font-medium '>
        <option value="">Selecciona un país</option>
        {countries.map(country => (
          <option key={country.country} value={country.countryInfo.iso3}>{country.country}</option>
        ))}
      </select>
    </>
  );
};

export default CountrySelect;