  import { LOGO_URL } from "../utils/constansts";
 import {useState} from "react";
 import { Link } from "react-router-dom";

  const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("login");
    return (
      <div className="header">
        <div className="logo">
          <img className="image" src={LOGO_URL} />
        </div>
        <div className="listitems"> 
          <ul>                                                                  
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About Us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <button className="login_btn" onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login")

            }}>{btnNameReact}</button>
          </ul>                                                                                 
        </div>
      </div>
    );                                                                                                                                                  
  };
  export default Header;