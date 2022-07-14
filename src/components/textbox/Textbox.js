import React from "react";
import './textbox.css';
const Textbox=(props)=>{
    return(
        <div className="textBoxSection">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} name={props.name} value={props.name} onChange={props.inputDataChange}/>
        </div>
        
    )
}
export default Textbox;