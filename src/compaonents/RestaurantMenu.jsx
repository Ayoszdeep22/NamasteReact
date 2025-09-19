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
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-sm mt-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="space-y-2 text-gray-600 mb-6">
        📍 Located in <strong className="text-gray-800">{locality}</strong><br />
        🍽️ Cost for two: <strong className="text-gray-800">{costForTwoMessage}</strong><br />
        🍴 Cuisines: <strong className="text-gray-800">{cuisines?.join(", ")}</strong><br />
        ⏱️ Delivery Time: <strong className="text-gray-800">{resInfo?.cards[2].card.card.info.sla.deliveryTime} mins</strong>
      </p>

      <h2 className="text-xl font-semibold mb-4">Restaurant Menu</h2>
      <ul className="space-y-2">
        {itemCards.map((i)=>(
          <li key={i.card.info.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <span>{i.card.info.name}</span>
            <span className="text-gray-600">Rs. {i.card.info.price/100||i.card.info.defaultPrice/100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
