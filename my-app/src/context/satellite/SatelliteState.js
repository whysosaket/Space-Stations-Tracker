import React from "react";
import SatelliteContext from "./satelliteContext";

const SatelliteState = (props) => {

  const fetchSatellite = function (route) {
    fetch(route) // fetching the data from celesTrak (TLE API)
       .then(async (response) => {

         var satelliteNumber = route.split("CATNR=")[1].split("&")[0];
         console.log(satelliteNumber);

         let res = await response.text();

         let splitText = "2 "+satelliteNumber
         let arr = res.split(splitText);
         var tledata1 = [arr[0], splitText+arr[1]];
         return tledata1;
       }
       ); //Line 1 and Line 2 is from TLE format
   };

  const getISS = () => {
    return fetchSatellite("https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=2le");
  }

  return (
    <SatelliteContext.Provider value={{fetchSatellite, getISS}}>
      {props.children}
    </SatelliteContext.Provider>
  );
};

export default SatelliteState;