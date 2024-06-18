import React, { useState } from 'react'

export default function List() {
    const [employees, setEmployees] = useState([
        {
            name: "Koluru Hari Krishna",
            city: "Nellore",
            gender: "Male",
            yop: 2024
        },
        {
            name: "Kona Siva Keshava",
            city: "Badvel",
            gender: "Male",
            yop: 2024
        },
        {
            name: "Kammiti Manohar",
            city: "Nellore",
            gender: "Male",
            yop: 2024
        },
        {
            name: "Subba Reddy",
            city: "Badvel",
            gender: "Male",
            yop: 2024
        },
    ])
    return (
        <div>
           {
            employees.map((emp)=>(
                <div>
                    <p>Name:{emp.name}</p>
                    <p>City:{emp.city}</p>
                    <p>Gender:{emp.gender}</p>
                    <p>Year:{emp.yop}</p>
                </div>
            ))
           }
        </div>
    )
}
