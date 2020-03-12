import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/" >Фильтр</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/info" >Информация</NavLink>
                </li>

            </ul>
        </div>

    </nav>
)


export default Navbar