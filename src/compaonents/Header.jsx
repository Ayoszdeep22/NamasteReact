import { LOGO_URL } from "../utils/constansts";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import userContext from "../utils/userContext.js";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="flex items-center justify-between h-20 bg-zinc-900 px-8 shadow-lg border-b-3 border-amber-600">
      <Link to="/">
        <img className="w-16" src={LOGO_URL} alt="Logo" />
      </Link>

      <ul className="flex items-center gap-8 text-zinc-100">
        <li className="flex items-center gap-1">
          {onlinestatus 
            ? <span className="text-green-600 animate-pulse">●</span> 
            : <span className="text-red-400">●</span>}
          <span className="text-sm">Online</span>
        </li>

        <li>
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-amber-400 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
        </li>
        <li>
          <Link to="/grocery" className="hover:text-amber-400 transition">Grocery</Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition text-lg"
          >
            🛒 <span>({cartItems.length})</span>
          </Link>
        </li>

        <li>
          <button
            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
            className="bg-amber-500 text-zinc-900 px-4 py-1 rounded-md font-medium hover:bg-amber-400 transition"
          >
            {btnNameReact}
          </button>
        </li>

        <li className="font-semibold text-zinc-100">
          {loggedInUser || "Guest"}
        </li>
      </ul>
    </div>
  );
};

export default Header;
