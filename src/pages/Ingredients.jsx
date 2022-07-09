import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams} from "react-router-dom";




const Ingredients = () => {
  const { idMeal } = useParams()
  const [food, setFood] = useState([]);

  const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getFood = async() =>{
        try {
            await axios.get(baseUrl)
            .then(res=>setFood(res.data.meals))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getFood()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idMeal])
    console.log(food);


  return (
    <div>
      {food?.map((item, index)=>{
        return(
          <div style={{display:"block"}}>
          <h2>{item.strArea} Cousine</h2>
          <h2>{item.strCategory} </h2>
          <h2>Ingredients</h2>
          <ul className='ingred' style={{listStyleType:"none"}}>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
            <li>{item.strIngredient5}</li>
            <li>{item.strIngredient6}</li>
            <li>{item.strIngredient7}</li>
            <li>{item.strIngredient8}</li>
            <li>{item.strIngredient9}</li>
            <li>{item.strIngredient10}</li>
          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Ingredients