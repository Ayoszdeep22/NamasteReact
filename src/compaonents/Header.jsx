  import { LOGO_URL } from "../utils/constansts";
 import {useState} from "react";
 import { Link } from "react-router-dom";
 import {useOnlineStatus} from "../utils/useOnlineStatus";

  const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("login");
    const onlinestatus=useOnlineStatus();
    return (
      <div className="header">
        <div className="logo">
          <img className="image" src={LOGO_URL} />
        </div>
        <div className="listitems"> 
          <ul>
            <li>Online Status :{onlinestatus ?" green":"red"}
            </li>                                                                  
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About Us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
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