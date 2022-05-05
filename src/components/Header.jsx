import { Link } from "react-router-dom"


const Header = () => {
    return (
        <nav className="light-green lighten-2">
            <div className="nav-wrapper">
                <Link to="/" className="nav-logo header-logo">
                    React Showcase
                </Link>
                <ul
                    id="nav-mobile"
                    className="right nav-list">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export { Header }