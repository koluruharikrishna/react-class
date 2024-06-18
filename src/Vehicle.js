import React,{useState} from 'react'
import DisplayVehicle from './DisplayVehicle'

export default function Vehicle() {
    const[vehicle, setVehicle]= useState([
        {
            vehiclename:"Baleno",
            brand: "Nexa",
            description:"Car",
            price:"9,00,000",
            pic:"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-66.jpeg?isig=0&q=80"
        },
        {
            vehiclename:"FZ-S",
            brand: "Yamaha",
            description:"Bike",
            price:"1,50,000",
            pic:"https://images.carandbike.com/bike-images/colors/yamaha/fz-s-v30-fi/yamaha-fz-s-v30-fi-metallic-grey.png?v=1641472950"
        },
        {
            vehiclename:"Vespa",
            brand: "Vespa",
            description:"Scooty",
            price:"2,00,000",
            pic:"https://5.imimg.com/data5/SELLER/Default/2023/4/299841287/UP/MA/OH/25845978/whatsapp-image-2023-04-12-at-13-03-50.jpeg"
        },
    ])
  return (
    <div>
        <DisplayVehicle myVehicles={vehicle}/>
    </div>


  )
}
