import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Radio from "../../../components/radio/Radio";
import Nav from "../../../components/nav/Nav";
import Button from "../../../components/button/Button";


const Field=()=>{
    const [fields,setFields]=useState([]);
    const [field,setField]=useState("");


    useEffect(()=>{
        getFields();
    },[])

    const getFields=()=>{
        fetch('http://localhost:3000/fields')
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("No data");
            }else{
                console.log("data found");
                setFields(data.data);
                console.log(data.data);
            }
        })
    }

    const navigate=useNavigate();
    const handleChange=(e)=>{
        setField(e.target.value);
        console.log("handle changed to ",e.target.value);
    }
    const saveField=()=>{
        console.log("Save Field");
        localStorage.setItem("field",field);
        navigate("/education/subField");
    }

    return(
        <div className="container-box">
             <h3>What was your field of study? </h3>
             {
                fields.map(fieldd=>(
                    <Radio key={fieldd} id={fieldd} name="field" value={fieldd} label={fieldd} onChange={handleChange} checked={field===fieldd}/>
                    ))
             }
            <Button className="signupBtn" label="Next" onClick={saveField} />
            <Nav pageName="home"/>
        </div>
    )
}

export default Field;