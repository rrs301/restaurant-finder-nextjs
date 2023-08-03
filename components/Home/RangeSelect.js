import React, { useState } from 'react'

function RangeSelect({onRadiusChange}) {
    const [radius,setRadius]=useState(2500);
  return (
    <div className='mt-5 px-2'>
        <h2
        className='font-bold '
        >Select Radius (In Meter)</h2>
        <input type='range'
        className='w-full h-2 bg-gray-200
        rounded-lg appearance-none
        cursor-pointer '
        min="500"
        max="5000"
        step="500"
        onChange={(e)=>{setRadius(e.target.value);onRadiusChange(e.target.value)}}
        defaultValue={radius}
        />
        <label className='text-gray-500
        text-[15px]'>{radius} in Meter</label>
    </div>
  )
}

export default RangeSelect