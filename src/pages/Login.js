import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Textbox from "../components/Textbox";


const Login=()=>{
    const [loginData,setLoginData]=useState({
        id:"",
        password:""
    })
    const navigate=useNavigate();
    const loginUser=(event)=>{
        event.preventDefault();
        console.log(loginData);
        fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(loginData)  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="verified"){
                console.log("User not verified");
                navigate("/verify");
            }else{
                console.log("navigating to student home");
                navigate("/studentHome");
            }
            localStorage.setItem("id",loginData.id);
        })
    }
    return(
        <div className="container-box cg-background-clr">
            <div className="topDiv">
                <h3>Hello! <br/> Login to your account.</h3>
            </div>
            <div className="bottomDiv">
                <form method="POST" onSubmit={loginUser}>
                    <Textbox label="Email" name={loginData.email} inputDataChange={(e) => setLoginData({...loginData, id: e.target.value})}/>
                    <Textbox label="Password" name={loginData.password} inputDataChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
                    <Button type="submit" className="signupBtn" name="loginBtn" label="Login"/>
                </form>
            </div>
        </div>
    )

}


export default Login;