import React from "react";
import MoleculesBoard from "../../components/MoleculesBoard/MoleculesBoard";
import UseFetch from "../../services/useFetch";


const Board = () => {
  const url = 'https://disease.sh/v3/covid-19/all';
  const { data } = UseFetch(url + "countries");

  return (
    <>
     <div>
    <MoleculesBoard UseFetch={UseFetch}/>
    
    </div>
    </>
   
  )
}

export default Board;

