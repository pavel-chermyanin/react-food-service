import { Link } from "react-router-dom"



const CategoryItem = (props) => {
    const {
        strCategory: name,
        strCategoryThumb: thumbnail,
        strCategoryDescription: description
    } = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={thumbnail} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description.slice(0,60) + '...'}</p>
            </div>
            <div className="card-action">
                <Link
                    to={'/category/' + name}
                    className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem