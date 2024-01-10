import React from "react";
import MoleculesBoard from "../../components/MoleculesBoard/MoleculesBoard";
import UseFetch from "../../services/useFetch";


const Traker3 = () => {
  const url = 'https://disease.sh/v3/covid-19/all';
  const { data } = UseFetch(url + "countries");

  return (
    <>
     <div className=" xl:w-[70%] lg:w-[92.5%] md:w-[90.5%] min-[375px]:w-[81.5%] max-[375px]:w-[79%] bg-primarybackground h-screen float-right p-[25px] flex flex-col justify-start ">
      <h1 className="text-primaryLetterColor font-semibold text-[22px] bg-white pl-[15px] py-[10px] rounded shadow ">Ajax Data Table - Covid-19 Country Wise State</h1>
    <MoleculesBoard UseFetch={UseFetch}/>
    
    </div>
    </>

   
  )
}

export default Traker3;

