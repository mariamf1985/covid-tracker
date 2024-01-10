import React, { useState } from 'react';
import UseFetch from '../services/UseFetch'
import CountrySelect from '../components/selectors/CountrySelect'
import VirusCardsBg from '../components/Cards/VirusCardsBg'
import VirusCardsIcons from '../components/Cards/VirusCardsIcons'
import map from '../assets/images/Tracker-1-map.png'

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
    <section className='bg-primarybackground float-right sm:p-[30px] xl:w-[70%] lg:w-[92.5%] md:w-[90.5%] min-[375px]:w-[80.5%] min-[375px]:p-[15px] max-[375px]:w-[78%] max-[375px]:p-[15px] min-[430px]:w-[81%] min-h-screen'>
      <div className='w-full md:flex justify-between items-center border-b-2 pb-3  max-[600px]:flex max-[600px]:flex-col'>
        {!loading  ? <CountrySelect countries={data} chooseCountry={updateSelectedCountry}/> : <p className='font-bold'>Loading...</p>}
        <div className='font-medium'>Update: January 31, 2022</div>
      </div>
      <div className='w-full lg:flex pt-3.5 pb-7 max-[600px]:flex max-[600px]:flex-col'>
        <VirusCardsBg selectCountry={selectedCountry}/>
        <img src={map} className='mt-3.5 lg:w-[43%] min-[1300px]:w-[48%]'></img>
      </div>
      <div>
      {!globalCases.loading ? <VirusCardsIcons allCases={globalCases.data}/> : <VirusCardsIcons allCases={{}}/>}
      </div>
    </section>
  )
}

export default Tracker1