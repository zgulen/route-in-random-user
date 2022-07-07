import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"

const FoodDetail = () => {
    const { idMeal } = useParams();
    const navigate = useNavigate();
    const [food, setFood] = useState([])
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
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
    }, [idMeal])
    console.log(food);
    console.log(idMeal);
  return (
    <div>
       {food?.map((item,index)=>{
        return (
            <div>
                <h1>{item.strMeal}</h1>
                <img src={item.strMealThumb} alt="" />
            </div>
        )
       })}
    </div>
  )
}

export default FoodDetail