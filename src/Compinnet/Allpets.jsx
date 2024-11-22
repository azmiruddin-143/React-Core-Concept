import { useEffect, useState } from "react"
import Singleallpets from "./Singleallpets"


export default function Allpets() {
    let [pets,setpets] = useState([])
    // let [detals,setdetails] = useState([])

    useEffect(()=>{
         fetch("https://openapi.programming-hero.com/api/peddy/pets")
         .then(response => response.json())
         .then(petdata => setpets (petdata.pets))
    },[])

    return(
        <div className="grid grid-cols-4 place-items-center my-7">
            {
            pets.map(petsloop => <Singleallpets petstransfer = {petsloop} ></Singleallpets>)
            }
        </div>
    )
}