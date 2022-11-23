import './SecondNavbar.css'
import { Link } from "react-router-dom";

const SecondNavbar = () => {
    return ( 
        <div className="second-navbar">
            <ul className="second-navbar-categories">
                <li>
                    <Link className="second-navbar-category" to='/'>News</Link>
                </li>
                <li>
                    <Link className="second-navbar-category" to='/'>Fantasy</Link>
                </li>
                <li>
                    <Link className="second-navbar-category" to='/'>Romance</Link>
                </li>
                <li>
                    <Link className="second-navbar-category" to='/'>Crime</Link>
                </li>
                <li>
                    <Link className="second-navbar-category" to='/'>Kids</Link>
                </li>
                <li>
                    <Link className="second-navbar-category" to='/'>More...</Link>
                </li>

            </ul>

        </div>
     );
}
 
export default SecondNavbar;