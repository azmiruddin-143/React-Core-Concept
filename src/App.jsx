import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Foots from './Compinnet/Foots'
import Allpets from './Compinnet/Allpets'

function App() {

  const allfoods = [
    { name: "Apple", color: "gray", price: "280" },
    { name: "Orange", color: "orange", price: "320" },
    { name: "Banena", color: "yallow", price: "150" },
    { name: "Mango", color: "green", price: "130" },
    { name: "Stobery", color: "red", price: "260" },
  ]

  return (
    <>
      {/* <Foots fol = {allfoods}></Foots> */}
      <Allpets></Allpets>
    </>
  )
}


export default App
