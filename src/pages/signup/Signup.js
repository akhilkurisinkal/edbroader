import { React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Textbox from "../../components/textbox/Textbox";

const Signup=()=>{
    const navigate=useNavigate();
    const [userData, setUserData]=useState(
            {
                fullName:'',
                dob:'',
                email:'',
                phone:'',
                password:'',
                cpassword:''
            })

    useEffect(() => {
        console.log(userData);
        }, [userData]);
       
    const signupStudent=(event)=>{
        event.preventDefault();
        fetch('http://localhost:3000/signup/',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.status!=="success"){
                console.log("Email already registered");
            }else{
                localStorage.setItem("id",userData.email);
                console.log("navigating to verification page");
                navigate("/verify");
            }
        });
    }


    return(
        <div className="container-box cg-background-clr">
            <div className="topDiv">
                <h3>Hello! <br/> Sign up to get started.</h3>
            </div>
            <div className="bottomDiv">
                <form method="POST" onSubmit={signupStudent}>
                    <Textbox label="Full name" name={userData.fullName} inputDataChange={(e) => setUserData({...userData, fullName: e.target.value})}/>
                    <Textbox label="Email" name={userData.email} inputDataChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <Textbox label="Phone" name={userData.phone} inputDataChange={(e) => setUserData({...userData, phone: e.target.value})}/>
                    <Textbox label="Date of Birth" name={userData.dob} inputDataChange={(e) => setUserData({...userData, dob: e.target.value})}/>
                    <Textbox label="Password" name={userData.password} inputDataChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <Textbox label="Confirm password" name={userData.cpassword} inputDataChange={(e) => setUserData({...userData, cpassword: e.target.value})}/>
                    <Button type="submit" className="signupBtn" name="signupBtn" label="Sign Up"/>
                    <span>Already have an account?<a href="/login">Login here</a></span>
                </form>
            </div>
        </div>
    )
}

export default Signup;