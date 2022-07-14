import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../components/radio/Radio";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";


const School=()=>{
    const [schools,setSchools]=useState([]);
    const [suggested,setSuggested]=useState([]);
    const [school,setSchool]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getSchools();
       getSuggested();
    },[])

    const getSchools=()=>{
        let selectedCountry=localStorage.getItem("country");
        let url="http://localhost:3000/schools/";
        let queryString=url+selectedCountry;
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setSchools(data.data);
                console.log(data.data);
            }
        })
    }

    const getSuggested=()=>{
        let selectedCountry=localStorage.getItem("country");
        let selectedSubField=localStorage.getItem("subField");
        let url="http://localhost:3000/schools/suggested/";
        let queryString=url+selectedCountry+"/"+selectedSubField;
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setSuggested(data.data);
                console.log(data.data);
            }
        })
    }

    const handleChange=(e)=>{
        setSchool(e.target.value);
        console.log("handle changed to ",e.target.value);
    }

    const saveSchool=()=>{
        localStorage.setItem("school",school);
        console.log("local storage:",localStorage.getItem("school"));
        navigate("/program");

    }
   
    return(
        <div className="container-box">
           <h3>Select a school? </h3>
           <h4>Suggested Schools for {localStorage.getItem("subField")}</h4>
           {
                suggested.map(schoold=>(
                    <Radio key={schoold.name} id={schoold.name} name="school" label={schoold.name} value={schoold.name} onChange={handleChange} checked={school===schoold.name} />
                    ))
           }
           <h4>All Schools</h4>
           {
                schools.map(schoold=>(
                    <Radio key={schoold.name} id={schoold.name} name="school" label={schoold.name} value={schoold.name} onChange={handleChange} checked={school===schoold.name} />
                    ))
           }
            <Button className="signupBtn" label="View Programs" onClick={saveSchool} />
            <Nav pageName="home"/>
        </div>
    )
}

export default School;