import React from 'react'
export default function DisplayHero(props) {
  return (
    <div>
       {
            props.myHeros.map((HeroData)=>(
                <div>
                    <p><b>Hero Name: </b>{HeroData.heroname}</p>
                    <p><b>Age: </b>{HeroData.age}</p>
                    <p><b>Hero Height: </b>{HeroData.height}</p>
                    <p><b>BlockbusterMovies: </b>{HeroData.blockbustermovies}</p>
                    <img src={HeroData.pic} alt={HeroData.heroname} width="15%"/>
                </div>
            ))
         }  
    </div>
  )
}
