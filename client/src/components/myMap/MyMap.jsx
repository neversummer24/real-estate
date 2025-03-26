import React from 'react';
import { Map, Marker } from "pigeon-maps";
import './myMap.scss';

function MyMap({items}) {
  return (
         <Map defaultCenter={[51.5074, -0.1278]} defaultZoom={11} className="map">
            {items.map((item, index) => (
               <Marker key={index} width={50} anchor={[item.latitude, item.longitude]} payload={item} 
                  onClick={() => {window.location.href = `/${item.id}`}}/>
            ))}
         </Map>
  )
}

export default MyMap
