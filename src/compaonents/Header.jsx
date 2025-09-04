  import { LOGO_URL } from "../utils/constansts";
  const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Header;