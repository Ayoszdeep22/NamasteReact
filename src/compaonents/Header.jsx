import { LOGO_URL } from "../utils/constansts";
 import { useState} from "react";
 import { Link } from "react-router-dom";
 import {useOnlineStatus} from "../utils/useOnlineStatus";
  import { useSelector } from "react-redux";

  const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("login");
    const onlinestatus=useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);




    return (
      <div className="flex shadow-sm justify-between h-20 bg-red-300 ">
        <div className="logo">
          <img className="w-16" src={LOGO_URL} />
        </div>
        <div className="flex items-center">   
          <ul className="flex gap-10 p-3 m-2 ">
            <li>Online Status :{onlinestatus ?" green":"red"}
            </li>                                                                  
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About Us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li className="text-2xl font-bold"><Link to="/cart">🛒({cartItems.length} items )</Link></li>
            <button className="bg-green-500 w-15 hover:bg-amber-500" onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login")

            }}>{btnNameReact}</button>
          </ul>                                                                                 
        </div>
      </div>
    );                                                                                                                                                  
  };
  export default Header;