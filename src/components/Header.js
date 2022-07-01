import React from "react";
import './header.css';
import menu from "../assets/images/menu.svg";
const Header=()=>{
    return(
        <header>
             <div id="logo">
                <h1>edbroader</h1>
            </div>
            <div id="menu">
                <img className="drag" src={menu} alt="handle" />
            </div>
        </header>
    );
}
export default Header;