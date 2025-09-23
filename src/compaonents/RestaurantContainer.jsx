import React from "react";

const RestaurantContainer = ({ resData }) => {
  console.log(resData);
  
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    totalRatingsString,
    sla
  } = resData;

  // Construct Swiggy's CDN image URL
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-4 text-zinc-100 border border-zinc-700 hover:border-zinc-600">
      <img 
        className="w-full h-48 object-cover rounded-lg mb-4" 
        src={imageUrl} 
        alt={name}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/250x120?text=No+Image';
        }}
      />
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-400 mb-2">{locality.trim()}, {areaName}</p>
      <p>Cuisines: {cuisines?.join(", ")}</p>
      <p>Cost: {costForTwo}</p>
      <p>⭐ {avgRating} ({totalRatingsString})</p>
      <p>🕒 {sla?.deliveryTime} mins</p>
    </div>
  );
};
//higher order component
export const withPromtedLabel = (RestaurantContainer) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-4 left-4 bg-black text-white px-2 py-1 rounded-lg z-10 text-sm">
          Promoted
        </label>
        <RestaurantContainer {...props} />
      </div>
    );
  };
}

export default RestaurantContainer;
