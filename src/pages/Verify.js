import { React, useState, useEffect} from "react";

const Verify=()=>{
    const [code, setCode]=useState({otp:""})

useEffect(() => {
    console.log(code);
    }, [code]);

    const verifyUser=(event)=>{
        event.preventDefault();
        console.log(code);
        fetch('http://localhost:3000/verify',{
            method:"POST",
            body:JSON.stringify(code),
            headers:{
                'Content-type':'application/json'
            }
        })
        

    }

    return(
        <div>
            <form onSubmit={verifyUser}>
                <input type="text" onChange={(e)=> setCode({...code,otp:e.target.value})} />
                <button>Verify</button>
            </form>
        </div>
    )
}
export default Verify;