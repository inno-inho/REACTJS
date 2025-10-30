
import {Link} from "react-router-dom"

const Nav = () => {

    return (
        <nav>
            <Link to = "/">Home</Link> |
            <Link to = "/about">about</Link>
        </nav>
    )

}

export default Nav