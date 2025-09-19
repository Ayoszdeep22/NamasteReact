import React from "react";

const RestaurantContainer = ({ resData }) => {
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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <img 
        className="w-full h-48 object-cover rounded-lg mb-4" 
        src={imageUrl} 
        alt={name}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/250x120?text=No+Image';
        }}
      />
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{locality.trim()}, {areaName}</p>
      <p>Cuisines: {cuisines?.join(", ")}</p>
      <p>Cost: {costForTwo}</p>
      <p>⭐ {avgRating} ({totalRatingsString})</p>
      <p>🕒 {sla?.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantContainer;
