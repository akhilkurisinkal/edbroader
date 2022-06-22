import React from "react";
import './navButton.css';
const NavButton=(props)=>{
    
    return(
        <button className={props.className} id={props.name} onClick={props.onClick}>  <img src={props.icon} alt="icon"/> {props.label}</button>
    )
}
export default NavButton;