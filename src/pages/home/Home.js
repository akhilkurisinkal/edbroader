import React from "react";
import Nav from "../../components/nav/Nav"
import waves from "../../assets/images/wave7.png";
import "./Home.css";
import tick from "../../assets/images/tick.png";
import bar from "../../assets/images/bar.png";

const Home=()=>{
    return(
        <div id="studentHome">
            <div>
                <img src={waves} alt="waves"/>
            </div>
            <div className="timeline">
                <h5>Here is your timeline.</h5>
                <div id="outer3">
                    <div><div className="tick"><img className="tickImg" src={tick} alt="" /></div><div className="statusHead"><strong><a href="/education/level">Background Check</a></strong></div></div>
                    <div><div className="bar"><img className="barImg" src={bar} alt=""/></div><div></div></div>
                    <div><div className="tick"></div><div className="statusHead"><strong><a href="/country">Choose country, school and program</a></strong></div></div>
                    <div><div className="bar"><img className="barImg" src={bar} alt=""/></div><div></div></div>
                    <div><div className="tick"></div><div className="statusHead"><strong>Find an educational consultant nearby</strong></div></div>
                    <div><div className="bar"><img className="barImg" src={bar} alt="" /></div><div></div></div>
                    <div><div className="tick"></div><div className="statusHead"><strong>Meet your future classmates</strong></div></div>
                </div>
            </div>
            
            <Nav pageName="home" />
        </div>
    )
}

export default Home;