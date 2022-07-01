import React from "react";
import "./Landing.css";
import Button from "../../components/Button";
import hero from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";

function Landing(props){
    const navigate=useNavigate();
    const gotoSignup=()=>{
        navigate("/signup");
    }
    return(
        <div className="landing">
            <div className="container-1">
                <img src={hero} alt="hero"/>
            </div>
            <div className="container-2">
                <h3><strong>Be ready to go global</strong></h3>
                <h4>Explore the best countries, schools and programs for your education with edbroader.</h4>
                <Button type="button" className="signupBtn" name="gotoSignup" label="Get started" onClick={gotoSignup} />
            </div>
        </div>
    )
}
export default Landing;