import React, { useEffect, useState } from 'react'
import useFetch from '../services/UseFetch'
import CountryCard from "../components/Cards/CountryCard";



// function TopCountries() {
//   const urlCountries = "https://disease.sh/v3/covid-19/countries/";
//     const {data, loading} = UseFetch(urlCountries)

//   const sortedData = data?.sort((a, b) => b.cases - a.cases);
//   const topCountries = sortedData?.slice(0, 10);

//   return (
//     <>
//       {topCountries?.map((element) => (
//         <CountryCard
//           flag = {element.countryInfo.flag} countryName = {element.country}  totalValue = {element.cases} />
//       ))}
//     </>
//   );
// }

function TopCountries() {
  const urlCountries = "https://disease.sh/v3/covid-19/countries/";
  const { data, loading } = useFetch(urlCountries);
  const [countriesByCases, setCountriesByCases] = useState([]);

  useEffect(() => {
    if (data) {
        const sortedByCases = data.slice().sort((a, b) => b.cases - a.cases).slice(0, 10);

        setCountriesByCases(sortedByCases);
     
    }
}, [data]);


  return (
    <>
       {countriesByCases.map(countryInfo => (
                        <CountryCard key={countryInfo.country} flag={countryInfo.countryInfo.flag} countryName={countryInfo.country} totalValue={countryInfo.cases} />
                    ))}

    </>
  );
}



export default TopCountries;
