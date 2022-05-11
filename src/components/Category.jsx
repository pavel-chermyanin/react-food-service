import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getFilteredCategory } from "../api"
import MealList from "./MealList"
import { Preloader } from "./Preloader"



const Category = () => {

    const navigate = useNavigate()
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => setMeals(data.meals))
    }, [name])

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="btn">
                Go Back
            </button>
            {!meals.length ? <Preloader /> : (
                <MealList meals={meals} />
            )}
        </>
    )
}

export default Category