  import { LOGO_URL } from "../utils/constansts";
 import {useState} from "react";

  const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("login");
    return (
      <div className="header">
        <div className="logo">
          <img className="image" src={LOGO_URL} />
        </div>
        <div className="listitems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
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