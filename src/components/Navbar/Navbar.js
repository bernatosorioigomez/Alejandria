import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

import Searchbar from "../Searchbar/Searchbar";
import BookData from '../../book_reduced.json'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return ( 
        <div className="navbar">
            <div className="navbar-items">
                <Link className="navbar-logo" to='/'>
                    <h1>Alejandria</h1>
                </Link>
                <div className="break"></div>
                <Searchbar placeholder={'Enter a book name, author...'}data={BookData} quantity={10}></Searchbar>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fa fas fa-times' : 'fa fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'navbar-menu active' : 'navbar-menu'}>
                  
                    <li>
                        <Link className="nav-links" to='/'>Cart</Link>
                    </li>

                    <li>
                        <Link className="navbar-button" to='/'>Sign In</Link>
                    </li>
                </ul>

                

                
            </div>
        </div>
     );
}
 
export default Navbar;
