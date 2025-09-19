import { useState, useEffect } from "react";   
import Shimmer from "./Shimmer.jsx";   
import { useParams } from "react-router-dom";    
import { API_URL } from "../utils/constansts.js";  
import useRestauranMenu from "../utils/useRestauranMenu.js";   
import RestaurantCategory from "./RestaurantCategory.jsx";

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
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.
    ["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
  

  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="max-w-3xl mx-auto p-6 bg-zinc-800 shadow-md rounded-lg border border-zinc-700 text-zinc-100">
        <h1 className="text-5xl font-bold mb-4 text-center underline">{name}</h1>
        <p className="space-y-2 mb-6 text-right">
          📍 Located in <strong className="text-amber-400">{locality}</strong><br />
          🍽️ Cost for two: <strong className="text-amber-400">{costForTwoMessage}</strong><br />
          🍴 Cuisines: <strong className="text-amber-400">{cuisines?.join(", ")}</strong><br />
          ⏱️ Delivery Time: <strong className="text-amber-400">{resInfo?.cards[2].card.card.info.sla.deliveryTime} mins</strong>
        </p>
        <h2 className="text-xl font-semibold mb-4">Restaurant Menu</h2>
{/* // accordian will be created now  */}

        {/* <ul className="space-y-2">
          {itemCards.map((i)=>(
            <li key={i.card.info.id} className="flex justify-between items-center p-2 hover:bg-zinc-700 rounded">
              <span>{i.card.info.name}</span>
              <span className="text-amber-400">Rs. {i.card.info.price/100||i.card.info.defaultPrice/100}</span>
            </li>
          ))}
        </ul> */}

        {categories.map((category, index) => (
          <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category}
          />
        ))}
        
        
      </div>
    </div> 
  );
};

export default RestaurantMenu;
