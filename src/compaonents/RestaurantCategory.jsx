import React, { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
    
const handleClick=()=>{
// setShowItems(!showItems);
setShowIndex(); 


}



return(
<div>
<div className="6/12 mx-auto my-4 flex bg-amber-200 shadow-lg">
<div className="flex justify-between cursor-pointer" onClick={handleClick}>
<span className="text-black text-2xl font-medium px-4 py-3 md:px-6 md:py-4 truncate">{data?.card?.card?.title}{" ("}{(data?.card?.card?.itemCards.length)}{")"}</span>
<span className="text-black px-3 py-2 mr-3 rounded-full bg-yellow-300 bg-opacity-20 shadow-sm flex items-center justify-center">{">"}</span>
</div>
{showItems && <ItemList items={data?.card?.card?.itemCards}/>}
</div>
</div>
)
}
export default RestaurantCategory;