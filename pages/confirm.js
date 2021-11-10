import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from "../components/Map"
import { useRouter } from 'next/router'
import RideSelector from '../components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter ()
    const {pickup , dropoff} = router.query

    const [pickupCoordinates, setpickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setdropoffCoordinates ] = useState([0, 0])


    const getPickupCoordinates = (pickup) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiaXVsaWFudmwiLCJhIjoiY2t2bXJiemt3M3NnZjJwcGd4eDhpOWduciJ9.aA4j_cbvnCQnTIa8J0VDtg",
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setpickupCoordinates(data.features[0].center)
        })

    }

    const getDropoffCordinates = (dropoff) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({ 
            access_token:"pk.eyJ1IjoiaXVsaWFudmwiLCJhIjoiY2t2bXJiemt3M3NnZjJwcGd4eDhpOWduciJ9.aA4j_cbvnCQnTIa8J0VDtg",
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setdropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCordinates(dropoff);

    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Link href ="/search" passHref ={true}>
            <BackButton src = "https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
            
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2 
`

const ConfirmButtonContainer = tw.div`
   border-t-2
`
const ConfirmButton = tw.div`
     bg-black text-white my-4 mx-4 text-center py-4 
`
const BackButton = tw.img`
    h-12 px-4 mx-2 w-20 z-20 cursor-pointer absolute 
`