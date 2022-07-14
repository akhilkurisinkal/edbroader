import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../components/radio/Radio";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";


const Program=()=>{
    const [programs,setPrograms]=useState([]);
    const [suggested,setSuggested]=useState([]);
    const [program,setProgram]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        getPrograms();
     //  getSuggested();
    },[])

    const getPrograms=()=>{
        let selectedSchool=localStorage.getItem("school");
        let selectedCareer=localStorage.getItem("career");
        let selectedLevel=localStorage.getItem("level");
        let url="http://localhost:3000/programs/";
        let queryString=url+selectedSchool+"/"+selectedLevel+"/"+selectedCareer;
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setPrograms(data.data);
                console.log(data.data);
            }
        })
    }

    // const getSuggested=()=>{
    //     let selectedCountry=localStorage.getItem("country");
    //     let selectedSubField=localStorage.getItem("subField");
    //     let url="http://localhost:3000/schools/suggested/";
    //     let queryString=url+selectedCountry+"/"+selectedSubField;
    //     fetch(queryString)
    //     .then(res => res.json())
    //     .then(data=>{
    //         if(data.status!=="found"){
    //             console.log("No data");
    //         }else{
    //             console.log("data found");
    //             setSuggested(data.data);
    //             console.log(data.data);
    //         }
    //     })
    // }

    const handleChange=(e)=>{
        setProgram(e.target.value);
        console.log("handle changed to ",e.target.value);
    }

    const saveProgram=()=>{
        localStorage.setItem("program",program);
        console.log("local storage:",localStorage.getItem("school"));
        navigate("/program");

    }
   
    return(
        <div className="container-box">
           <h3>Programs? </h3>
           <h4>Suggested programs for {localStorage.getItem("subField")}</h4>
           {/* {
                suggested.map(schoold=>(
                    <Radio key={schoold.name} id={schoold.name} name="school" label={schoold.name} value={schoold.name} onChange={handleChange} checked={school===schoold.name} />
                    ))
           } */}
           <h4>All Programs</h4>
           {
                programs.map(programsd=>(
                    <Radio key={programsd.name} id={programsd.name} name="programs" label={programsd.name} value={programsd.name} onChange={handleChange} checked={program===programsd.name} />
                    ))
           }
            <Button className="signupBtn" label="View Program" onClick={saveProgram} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Program;