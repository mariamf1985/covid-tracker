import React from 'react'
import UseFetch from "../../services/UseFetch";
import CountryCard from "../components/Cards/CountryCard";
import "./TopCountries.css";

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
  const { data, loading } = UseFetch(urlCountries);

  if (loading) {
    return <p>Loading...</p>;
  }

  const sortedData = data?.sort((a, b) => b.cases - a.cases);
  const topCountries = sortedData?.slice(0, 10);

  return (
    <>
      {topCountries?.map((element) => (
        <CountryCard
        key={element.cases}
        img_flags_value={element.countryInfo.flag}
        img_country_style={"img_country"}
        card_resum_style={"div_pais"}
        card_resum_chip_style={"card_resum_chip"}
        card_resum_chip_value={element.country}
        card_resum_number_style={"total_cases"}
        card_resum_number_value={element.cases}
        />
      ))}
    </>
  );
}

export default TopCountries;

