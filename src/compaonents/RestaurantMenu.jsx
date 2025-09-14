import { useState, useEffect } from "react";   
import Shimmer from "./Shimmer.jsx";   
import { useParams } from "react-router-dom";    
import { API_URL } from "../utils/constansts.js";  
import useRestauranMenu from "../utils/useRestauranMenu.js";   

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();
  const resInfo=useRestauranMenu(resId);  
  
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     API_URL+resId
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);  
  // };

  if (resInfo == null) {
    return <Shimmer />;
  }

  // 🟢 destructuring safely
  const { name,locality,costForTwoMessage,cuisines,deliveryTime } = resInfo?.cards[2]?.card?.card?.info || {};
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log(itemCards);
  

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
      📍 Located in <strong>{locality}</strong><br />
      🍽️ Cost for two: <strong>{costForTwoMessage}</strong><br />
      🍴 Cuisines: <strong>{cuisines?.join(", ")}</strong><br />
      ⏱️ Delivery Time: <strong>{resInfo?.cards[2].card.card.info.sla.deliveryTime} mins</strong>
    </p>

      <h2>Restaurant Menu</h2>
      <ul>
        {itemCards.map((i)=>(
          <li key={i.card.info.id}>{i.card.info.name}-{" Rs. "}{i.card.info.price/100||i.card.info.defaultPrice/100}</li>
        ))}
      
       

      </ul>
    </div>
  );
};

export default RestaurantMenu;
