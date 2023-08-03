import { UserLocationContext } from '@/context/UserLocationContext';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

function BusinessItem({business,showDir=false}) {
    const GOOGLE_API_KEY=process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const photo_ref=business?.photos?business?.photos[0]?.photo_reference:''
    const {userLocation,setUserLocation}=useContext(UserLocationContext);
    const [distance,setDistance]=useState();
    useEffect(()=>{
      calculateDistance(
        business.geometry.location.lat,
        business.geometry.location.lng,
        userLocation.lat,
        userLocation.lng
      )
    },[])

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
     
      const earthRadius = 6371; // in kilometers
  
      const degToRad = (deg) => {
        return deg * (Math.PI / 180);
      };
  
      const dLat = degToRad(lat2 - lat1);
      const dLon = degToRad(lon2 - lon1);
  
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      const distance = earthRadius * c;
     
      setDistance(distance.toFixed(1))
      return distance.toFixed(2); // Return the distance with 2 decimal places
    };

 
    const onDirectionClick=()=>{
      window.open('https://www.google.com/maps/dir/?api=1&origin='+
      userLocation.lat+','+userLocation.lng+'&destination='
      +business.geometry.location.lat
      +','+business.geometry.location.lng+'&travelmode=driving')
  }

    return (
    <div className='w-[195px] flex-shrink-0 p-2
     rounded-lg shadow-md mb-1
     bg-white hover:scale-110 transition-all mt-[20px] cursor-pointer'>
        <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
            alt={business.name}
            width={180}
            height={80}
            className='rounded-lg object-cover h-[90px] '
        />
         <h2 className='text-[13px] font-bold mt-1 line-clamp-1'>{business.name}</h2>
                <h2 className='text-[10px] text-gray-400 
                line-clamp-2'>{business.formatted_address}</h2>
                <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" fill="currentColor" 
                className="w-3 h-3 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <h2 className='text-[10px] font-bold'>{business.rating}</h2>
            </div>
          {showDir?  <div className='border-t-[1px] p-1 mt-1'>
              <h2 className='text-[#0075ff]
              flex justify-between items-center'>Dist: {distance} Mile 
              <span className='border-[1px] p-1 rounded-full
              border-blue-500
              hover:text-white
              hover:bg-blue-500' onClick={()=>onDirectionClick()} >Get Direction</span></h2>
            </div>:null}
    </div>
  )
}

export default BusinessItem