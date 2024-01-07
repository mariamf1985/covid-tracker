import React, { useState } from 'react';
import UseFetch from '../services/UseFetch'
import CountrySelect from '../components/selectors/CountrySelect'
import VirusCardsBg from '../components/Cards/VirusCardsBg'
import VirusCardsIcons from '../components/Cards/VirusCardsIcons'

const Tracker1 = () => {
    const [selectedCountry, setSelectedCountry] = useState({});
    const urlCountries = "https://disease.sh/v3/covid-19/countries/";
    const urlGlobalCases = "https://disease.sh/v3/covid-19/all";
    const {data, loading} = UseFetch(urlCountries);
    const globalCases = UseFetch(urlGlobalCases);

    const updateSelectedCountry = (value) => {
        const newSelectedCountry = findCountry(value);
        setSelectedCountry(newSelectedCountry);
    }

    const findCountry = (countryId)=>{
        if (data){
           return data.find( (country) => country.countryInfo._id === parseInt(countryId)) || {};
        }
    }
  return (
    <>
        {!loading  ? <CountrySelect countries={data} chooseCountry={updateSelectedCountry}/> : <p className='font-bold'>Loading...</p>}
        <VirusCardsBg selectCountry={selectedCountry}/>
        {!globalCases.loading ? <VirusCardsIcons allCases={globalCases.data}/> : <VirusCardsIcons allCases={{}}/>}
    </>
  )
}

export default Tracker1