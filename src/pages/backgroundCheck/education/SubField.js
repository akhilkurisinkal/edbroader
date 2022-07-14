import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../../../components/radio/Radio";
import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";


const Field=()=>{
    const [subFields,setSubFields]=useState([]);
    const [subField,setSubField]=useState("");


    useEffect(()=>{
        getSubFields();
    },[])

    const getSubFields=()=>{
        let selectedField=localStorage.getItem("field");
        let url="http://localhost:3000/subFields/";
        let queryString=url+selectedField;
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setSubFields(data.data);
                console.log(data.data);
            }
        })
    }

    const navigate=useNavigate();
    const handleChange=(e)=>{
        setSubField(e.target.value);
        console.log("handle changed to ",e.target.value);
    }
    const saveSubField=()=>{
        console.log("Save Field");
        localStorage.setItem("subField",subField);
        navigate("/career");
    }

    return(
        <div className="container-box">
             <h3>What was your major? </h3>
             {
                subFields.map(subfieldd=>(
                    <Radio key={subfieldd.name} id={subfieldd.name} name="subField" value={subfieldd.name} label={subfieldd.name} onChange={handleChange} checked={subField===subfieldd.name}/>
                    ))
             }
            <Button className="signupBtn" label="Next" onClick={saveSubField} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Field;