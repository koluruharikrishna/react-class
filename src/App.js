import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// import {useState} from 'react'
// import UserData from './UserData'
// import HeroData from './HeroData'
// function App(){
//   const [name,setName]=useState('ReactJS')
//   const [year,setYear]=useState(2013)
//   const [person,setPerson]=useState('Jordan Walke')
//   return(
//     <div>
//       <UserData/>
//       {/* <HeroData/> */}
//       {/* <p>Good Afternoon</p>
//       <h1>Welcome to Hyderbad</h1>
//       <h1>Who is Introduced ReactJS</h1>
//       <p>{name} was released first in {year},and since then, it has become one of the most popular
//          JavaScript libraries for building user interfaces. It was developed by {person}, a software engineer at Facebook,
//          and was initially released as an open-source project on GitHub.</p>
//       <Props studentName="Hari Krishna" studentRollNo="1"/>
//       <Props studentName="Siva Keshava" studentRollNo="2"/>
//       <Props studentName="Subba Reddy" studentRollNo="3"/>
//       <Props studentName="Manohar" studentRollNo="4"/> */}
//     </div>
//   )
// }

// export default App