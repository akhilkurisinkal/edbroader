import React from "react";
import "./Radio.css";
const Radio=(props)=>{
    return(
        <div className="radio">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.name} type="radio" value={props.value} checked={props.checked} onChange={props.onChange}/>
            
        </div>
    )
}


export default Radio;