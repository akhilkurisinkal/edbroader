import { React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Verify=()=>{
    const [code, setCode]=useState({
        id:localStorage.getItem("id"),
        vcode:""}
        )

useEffect(() => {
    console.log(code);
    }, []);

    const navigate=useNavigate();
    const verifyUser=(event)=>{
        event.preventDefault();
        console.log(code);
        fetch('http://localhost:3000/signup/verify',{
            method:"POST",
            body:JSON.stringify(code),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="verified"){
                console.log("Invalid code",data.status);
            }else{
                console.log("navigating to login page");
                navigate("/login");
            }
        })
        
    }

    return(
        <div className="container-box">
            <form onSubmit={verifyUser}>
                <h3>Enter verification code send to your email</h3>
                <input type="text" onChange={(e)=> setCode({...code,vcode:e.target.value})} />
                <button className="signupBtn space-top">Verify</button>
            </form>
        </div>
    )
}
export default Verify;