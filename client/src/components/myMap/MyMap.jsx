import React from 'react';
import { Map, Marker } from "pigeon-maps";
import './myMap.scss';

function MyMap({items}) {
  return (
         <Map defaultCenter={items.length ===1 ? [items[0].latitude, items[0].longitude] : [51.505, -0.09]} defaultZoom={11} className="map">
            {items.map((item, index) => (
               <Marker key={index} width={50} anchor={[item.latitude, item.longitude]} payload={item} 
                  onClick={() => {window.location.href = `/${item.id}`}}/>
            ))}
         </Map>
  )
}

export default MyMap
