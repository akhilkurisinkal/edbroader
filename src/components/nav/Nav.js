import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../navButton/NavButton";
import "./nav.css";
import home from "../../assets/images/home.svg";
import peers from "../../assets/images/peers.svg";
import search from "../../assets/images/search.svg";
import notif from "../../assets/images/notif.svg";
import profile from "../../assets/images/profile.svg";
import homeLight from "../../assets/images/light/home.svg";
import peersLight from "../../assets/images/light/peers.svg";
import searchLight from "../../assets/images/light/search.svg";
import notifLight from "../../assets/images/light/notif.svg";
import profileLight from "../../assets/images/light/profile.svg";

const Nav=(props)=>{

    const navigate=useNavigate();
    const [className,setClassName]=useState({
        home:"inactive",
        peers:"inactive",
        search:"inactive",
        notif:"inactive",
        profile:"inactive"
    });

    const [btnLabel,setBtnLabel]=useState({
        home:"",
        peers:"",
        search:"",
        notif:"",
        profile:""
    });

    const [btnIcon,setBtnIcon]=useState({
        home:home,
        peers:peers,
        search:search,
        notif:notif,
        profile:profile
    })

    useEffect(()=>{
        if(props.pageName==="home"){
            setClassName({
                ...className,home:"navBtnActive"
            })
            setBtnLabel({
                ...btnLabel,home:"Home"
            })
            setBtnIcon({
                ...btnIcon,home:homeLight
            })
        }
        if(props.pageName==="peers"){
            setClassName({
                ...className,peers:"navBtnActive"
            })
            setBtnLabel({
                ...btnLabel,peers:"peers"
            })
            setBtnIcon({
                ...btnIcon,peers:peersLight
            })
        }
        if(props.pageName==="search"){
            setClassName({
                ...className,search:"navBtnActive"
            })
            setBtnLabel({
                ...btnLabel,search:"Search"
            })
            setBtnIcon({
                ...btnIcon,search:searchLight
            })
        }
        if(props.pageName==="notif"){
            setClassName({
                ...className,notif:"navBtnActive"
            })
            setBtnLabel({
                ...btnLabel,notif:"Notif"
            })
            setBtnIcon({
                ...btnIcon,notif:notifLight
            })
        }
        if(props.pageName==="profile"){
            setClassName({
                ...className,profile:"navBtnActive"
            })
            setBtnLabel({
                ...btnLabel,profile:"Profile"
            })
            setBtnIcon({
                ...btnIcon,profile:profileLight
            })
        }
    },[props.pageName]);

               
//functions for navigating pages
    const navigateHome=()=>{
        console.log("Home button clicked");
        navigate("/home");
    }
                    
    const navigatePeers=()=>{
        console.log("Connections button clicked");
        navigate("/peers");
    }  

    const navigateSearch=()=>{
        console.log("Search button clicked");
        navigate("/search");
    }  

    const navigateNotif=()=>{
        console.log("Notifications button clicked");
        navigate("/notif");
    } 

    const navigateProfile=()=>{
        console.log("Profile button clicked");
        navigate("/profile");
    }   

    return(
        <nav>
            <ul>
                <li><NavButton className={className.home} label={btnLabel.home} name="homeBtn" icon={btnIcon.home} onClick={navigateHome} /></li>
                <li><NavButton className={className.peers} label={btnLabel.peers} name="peersBtn" icon={btnIcon.peers} onClick={navigatePeers}/></li>
                <li><NavButton className={className.search} label={btnLabel.search} name="searchBtn" icon={btnIcon.search} onClick={navigateSearch} /></li>
                <li><NavButton className={className.notif} label={btnLabel.notif} name="notiBtn" icon={btnIcon.notif} onClick={navigateNotif}/></li>
                <li><NavButton className={className.profile} label={btnLabel.profile} name="profileBtn" icon={btnIcon.profile} onClick={navigateProfile}/></li>
            </ul>
        </nav>
    )    
}
export default Nav;