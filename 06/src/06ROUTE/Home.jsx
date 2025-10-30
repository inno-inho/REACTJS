// Link to를 쓰기위한 모듈
import {Link} from "react-router-dom"


const Home = () => {

    return (
        <>

            <h1>Home Page</h1>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/About?name=Helen&age=27">About_1</Link> </li>
                <li> <Link to="/About?name=Inno&age=29">About_2</Link> </li>
                <li> <Link to="/Contact/inno/29">Contact</Link> </li>
            </ul>
        
        </>
    )
}

export default Home