import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import useCard from "../utils/useCard";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

const Body = () => {
  const { listOfRestaurants, setListOfRestaurants, originalList } = useCard();
  const [searchText, setSearchText] = useState("");
  
  
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false){
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-600">You are not connected to the internet</h1>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filtered = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = originalList.filter(
      (res) => parseFloat(res.info.avgRating) > 3.8
    );
    setListOfRestaurants(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition-colors" 
            onClick={handleSearch}
          >
            Search
          </button>
          <button 
            className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition-colors"
            onClick={handleTopRated}
          >
            Top Rated
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listOfRestaurants.map((i) => (
          <Link
            key={i.info.id}
            to={`/restaurants/${i.info.id}`}
            className="block hover:no-underline text-current"
          >
            <RestaurantContainer resData={i.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;