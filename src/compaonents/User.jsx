import { useState } from "react";
const User=(props)=>{
    const [count]=useState(0);
    const {name}=props;
    return(
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h5>Location :Greater noidaa</h5> 
            <h5>Email:Ayoszmishra22@gamil.com</h5>
            <h6>COUNT : {count}</h6>
            </div>
    
    )

}
export default User