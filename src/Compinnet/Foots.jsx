import Foot from "./Foot";



export default function Foots({fol}) {
    return(
       <div>
             <h1>jfgb</h1>
            {
                fol.map(azmir => <Foot foottransfer = {azmir} ></Foot>)
                
            }
            
       </div>
    )
}