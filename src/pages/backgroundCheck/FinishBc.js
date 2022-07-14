import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button"
import Nav from "../../components/nav/Nav";


const FinishBc=()=>{
    const [bgData,setBgData]=useState({});
    const navigate=useNavigate();
    
    useEffect(()=>{
        let email=localStorage.getItem("id");
        let level=localStorage.getItem("level");
        let field=localStorage.getItem("field");
        let subField=localStorage.getItem("subField");
        let career=localStorage.getItem("career");
        setBgData({...bgData,"email":email,"level":level,"field":field,"subField":subField,"career":career})
    },[])

    const saveBackground=()=>{
        fetch('http://localhost:3000/background/',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(bgData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.status!=="success"){
                console.log("something went wrong!");
            }else{
                console.log("navigating to home");
                navigate("/home");
            }
        });
    }


    return(
        <div className="container-box">
                <h3>Finsih Background check</h3>   
                            <div>
                                <div key={bgData.email}>{bgData.email}</div>
                                <div key={bgData.level}>{bgData.level}</div>
                                <div key={bgData.field}>{bgData.field}</div>
                                <div key={bgData.subField}>{bgData.subField}</div>
                                <div key={bgData.career}>{bgData.career}</div>
                            </div>
                       
                <Button type="button" className="signupBtn" name="gotoSignup" label="Finish" onClick={saveBackground} />
                <Nav pageName="home"/>
        </div>
    )
}
export default FinishBc;