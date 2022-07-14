import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../../../components/radio/Radio";
import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";


const Level=()=>{
    const [levels,setLevels]=useState([]);
    const [level,setLevel]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getLevels();
    },[])

    const getLevels=()=>{
        fetch('http://localhost:3000/levels')
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setLevels(data.data);
                console.log(data.data);
            }
        })
    }

    const handleChange=(e)=>{
        setLevel(e.target.value);
        console.log("handle changed to ",e.target.value);
    }

    const saveLevel=()=>{
        localStorage.setItem("level",level);
        console.log("local storage:",localStorage.getItem("level"));
        navigate("/education/field");

    }
   
    return(
        <div className="container-box">
           <h3>What is your highest level of education? </h3>
           {
                levels.map(leveld=>(
                    <Radio key={leveld} id={leveld} name="level" label={leveld} value={leveld} onChange={handleChange} checked={level===leveld} />
                    ))
           }
            <Button className="signupBtn" label="Next" onClick={saveLevel} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Level;