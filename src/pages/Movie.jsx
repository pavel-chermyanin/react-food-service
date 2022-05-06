import { useParams, useNavigate,useLocation,useRoutes } from "react-router-dom"



const Movie = () => {
    const value = useParams()
    const navigate = useNavigate()
    const goBack = () => {
        navigate("/about", { replace: true });
    }
    // console.log(useLocation());
    // console.log(useRoutes());

    return (
        <>
            <h1>Movie</h1>
            <button
                onClick={goBack}
                className="btn">Back Main</button>
        </>
    )
}

export default Movie 