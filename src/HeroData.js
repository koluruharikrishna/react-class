import React,{useState} from 'react'
import DisplayHero from './DisplayHero'

export default function HeroData() {
    const[hero, setHero]= useState([
        {
            heroname:"Prabhas",
            age: "44",
            height:"6.3",
            blockbustermovies:"Mirchi,Bahubali-1,Bahubali-2,Salaar",
            pic:"https://static.india.com/wp-content/uploads/2023/12/prabhas4.jpg?impolicy=Medium_Widthonly&w=400&h=800"},
        {
            heroname:"Pawan Kalyan",
            age: "55",
            height:"5.10",
            blockbustermovies:"Bheemla Nayak,Gabbar Singh,Atharintiki Daredhi",
            pic:"https://m.media-amazon.com/images/I/71s8uODB6AL.jpg"  
        },
        {
            heroname:"Allu Arjun",
            age: "42",
            height:"5.6",
            blockbustermovies:"Sarrainodu,Race Gurram,Pushpa",
            pic:"https://yt3.googleusercontent.com/ytc/AIdro_m90XWrTWdIDpAFCRce_H_XRE1fNVwu8RIDGlga5oZNanE=s900-c-k-c0x00ffffff-no-rj"
        },
    ])
  return (
    <div>
      <DisplayHero myHeros={hero}/>
    </div>
  )
}
