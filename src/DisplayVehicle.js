import React from "react"
import './Vehicle.css'
export default function DisplayVehicle(props) { 
  return (
    <div className="vehicle-parent">
         {
            props.myVehicles.map((vehicle)=>(
                <div className="vehicle">
                    <p><b>Name: </b>{vehicle.vehiclename}</p>
                    <p><b>Brand: </b>{vehicle.brand}</p>
                    <p><b>Description: </b>{vehicle.description}</p>
                    <p><b>Price: </b>{vehicle.price}</p>
                    <img src={vehicle.pic} alt={vehicle.vehiclename} width="25%"/>
                </div>
            ))
         }  
    </div>
  )
}
