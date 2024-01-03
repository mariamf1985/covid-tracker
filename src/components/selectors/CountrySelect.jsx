import React from 'react';
import UseFetch from '../../services/UseFetch.jsx';

const CountrySelect = () => {
  const url = "https://disease.sh/v3/covid-19/countries/";
  const {data} = UseFetch(url);
  return (
    <>
      <select id="countrySelect">
        <option value="">Selecciona un país</option>
        {data?.map(country => (
          <option key={country.country} value={country.country}>{country.country}</option>
        ))}
      </select>
    </>
  );
};

export default CountrySelect;