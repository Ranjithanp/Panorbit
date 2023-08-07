import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';



function Map_Box()
{

mapboxgl.accessToken = 'pk.eyJ1IjoibnByYW5qaXRoYTkzIiwiYSI6ImNsajc0NXV2YTBxam8zcXF6b2JyODFwMTQifQ.sCW4I0iXkLRx-J_C-78Lcg';
const locatio = useLocation();
let keys = locatio.state.key;

const mapContainer = useRef(null);
const map = useRef(null);
const [lngs, setLng] = useState(keys.address.geo.lng);
const [lat, setLat] = useState(keys.address.geo.lat);
const [zoom, setZoom] = useState(3);



useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lngs , lat],
    zoom: zoom

    });

    });
     
    useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lngs);
     setLat(map.current.getCenter().lat);
    setZoom(map.current.getZoom());
   
    });
   
    });
    return(
        <div>
            
         
                <Card  ref={mapContainer}  className='map'>

                </Card>
               
                Longitude: {lngs} | Latitude: {lat} 
        </div>
    )
}
export default Map_Box;