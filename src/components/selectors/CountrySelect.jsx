import React from 'react';

const CountrySelect = ({ countries, onSelect }) => {
  return (
    <>
      <select id="countrySelect" onChange={onSelect}>
        <option value="">Selecciona un país</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </>
  );
};

export default CountrySelect;