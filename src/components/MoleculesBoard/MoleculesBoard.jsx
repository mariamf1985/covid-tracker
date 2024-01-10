import React from "react";
import useFetch from "../../services/useFetch";
import AtomsBoard from "../AtomsBoard/AtomsBoard";


const MoleculesBoard = () => {
  const url = "https://disease.sh/v3/covid-19/all";
  const { data } = useFetch(url + "countries");
  console.log(data);
  const myColumns = [
    {name: 'Flag',
    selector: 'flag',
    cell: (row) => <img src={row.countryInfo.flag} alt="Flag" />,
    },
    {
    name: 'Country',
    selector: "country",
    },
    {
        name: 'Cases',
        selector: "cases",
    },
    {
        name: 'New Cases',
        selector: "todayCases",
    },
    {
        name: 'Deaths',
        selector: "deaths",
    },
    {
        name: 'New Deaths',
        selector: "todayDeaths",
    },
    {
        name: 'Recoverd',
        selector: "recovered",
    },
    {
        name: 'Active',
        selector: "active",
    },
    {
        name: 'Critical',
        selector: "critical",
    },
    {
        name: 'Tested',
        selector: "tests",
    },
  ];
  if (data === null) {
    return <> Loading </>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <AtomsBoard data={data} columns={myColumns} />
    </div>
  );
};
export default MoleculesBoard;
