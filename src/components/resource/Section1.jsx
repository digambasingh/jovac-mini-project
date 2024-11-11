import React from 'react';
import "./section.css"
import NavScrollExample from '../home/NavScrollExample';
import seriesData from "../../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import Footer from '../footer/Footer';
function Section1() {
  return (
    <>
    <NavScrollExample/>
    <ul>
           { seriesData.map((currentElement) => {
                 return(
                  <SeriesCard  currentElement={currentElement} key={currentElement.id}   />
                 );
                
            })
        };
  </ul>
<Footer/>
    </>
  );
}

export default Section1;