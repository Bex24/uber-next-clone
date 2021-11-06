import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 
    'pk.eyJ1IjoiaXVsaWFudmwiLCJhIjoiY2t2bXJiemt3M3NnZjJwcGd4eDhpOWduciJ9.aA4j_cbvnCQnTIa8J0VDtg';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [26.096306, 44.439663],
        zoom: 5,
        });
    });
    return <Wrapper id ="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
    flex-1 
`
