import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 
    'pk.eyJ1IjoiaXVsaWFudmwiLCJhIjoiY2t2bXJiemt3M3NnZjJwcGd4eDhpOWduciJ9.aA4j_cbvnCQnTIa8J0VDtg';


const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [26.096306, 44.439663],
        zoom: 3,
        });

        if(props.pickupCoordinates){
           addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
           addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                 props.dropoffCoordinates,
                 props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    },[props.pickupCoordinates, props.dropoffCoordinates]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }


    return <Wrapper id ="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`
