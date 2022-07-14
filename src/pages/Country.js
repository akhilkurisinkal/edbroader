import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../components/radio/Radio";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";


const Country=()=>{
    const [countries,setCountries]=useState([]);
    const [suggested,setSuggested]=useState([]);
    const [country,setCountry]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getCountries();
       getSuggested();
    },[])

    const getCountries=()=>{
        fetch('http://localhost:3000/countries')
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setCountries(data.data);
                console.log(data.data);
            }
        })
    }

    const getSuggested=()=>{
        let selectedSubField=localStorage.getItem("subField");
        let url="http://localhost:3000/countries/suggested/";
        let queryString=url+selectedSubField;
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
        setCountry(e.target.value);
        console.log("handle changed to ",e.target.value);
    }

    const saveCountry=()=>{
        localStorage.setItem("country",country);
        console.log("local storage:",localStorage.getItem("country"));
        navigate("/school");

    }
   
    return(
        <div className="container-box">
           <h3>What is your prefferd country? </h3>
           <h4>Suggested for {localStorage.getItem("subField")}</h4>
           {
                suggested.map(countryd=>(
                    <Radio key={countryd.name} id={countryd.name} name="level" label={countryd.name} value={countryd.name} onChange={handleChange} checked={country===countryd.name} />
                    ))
           }
           <h4>All countries</h4>
           {
                countries.map(countryd=>(
                    <Radio key={countryd.name} id={countryd.name} name="level" label={countryd.name} value={countryd.name} onChange={handleChange} checked={country===countryd.name} />
                    ))
           }
            <Button className="signupBtn" label="Show Schools" onClick={saveCountry} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Country;