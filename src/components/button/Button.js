import React from "react";
import './button.css';
const Button=(props)=>{
    return(
        <button type={props.type} className={props.className} id={props.name} onClick={props.onClick}>{props.label}</button>
    )
}
export default Button;