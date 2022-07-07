import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardDetail = () => {
    const navigate = useNavigate();

    const baseUrl =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    const [foods, setFood] = useState([]);

    const getFood = async () => {
        try {
            await axios.get(baseUrl).then((res) => setFood(res.data.meals));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFood();
    }, []);

    console.log(foods);
    return (
        <div className="foods-page">
            {foods.map((items) => {
                const { strMeal, strMealThumb, idMeal } = items;
                return (
                    <div 
                    onClick={() => navigate(`/foods/${idMeal}`)}
                    key={idMeal} 
                    className="food-card">
                        <h3>{strMeal}</h3>
                        <img src={strMealThumb} className="img-card" alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default CardDetail;
