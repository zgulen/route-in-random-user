import React from 'react'
import "./getfoods.css"
import {Link} from "react-router-dom"

const GetFoods = () => {
  return (
    <main>
        <div>
        <h1>What sould I Cook?</h1>
        <button><Link to="foods" className='food'>Get Food</Link></button>
        </div>
    </main>
  )
}

export default GetFoods