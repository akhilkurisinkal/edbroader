import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../../../components/radio/Radio";
import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";


const Career=()=>{
    const [careers,setCareers]=useState([]);
    const [career,setCareer]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getCareers();
    },[])

    const getCareers=()=>{
        let selectedSubField=localStorage.getItem("subField");
        let url="http://localhost:3000/careers/";
        let queryString=url+selectedSubField;
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setCareers(data.data);
                console.log(data.data);
            }
        })
    }


    const handleChange=(e)=>{
        setCareer(e.target.value);
        console.log("handle changed to ",e.target.value);
    }
    const saveCareer=()=>{
        localStorage.setItem("career",career);
        navigate("/finishbc");

    }
   
    return(
        <div className="container-box">
           <h3>What is your desired career? </h3>
           {
                careers.map(careerss=>(
                    <Radio key={careerss.name} id={careerss.name} name="subField" value={careerss.name} label={careerss.name} onChange={handleChange} checked={careers===careerss.name}/>
                    ))
             }
            <Button className="signupBtn" label="Next" onClick={saveCareer} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Career;