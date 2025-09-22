import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantContainer,{withPromtedLabel} from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import useCard from "../utils/useCard";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
import { useContext } from "react";
import userContext from "../utils/userContext.js";

const Body = () => {
  
  const { listOfRestaurants, setListOfRestaurants, originalList } = useCard();
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurants);
  const RestaurantCaredPromoted=withPromtedLabel(RestaurantContainer);
  
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false){
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <h1 className="text-2xl text-zinc-100">You are not connected to the internet</h1>
      </div>
    );
  }
  const {loggedInUser,setUserInfo}=useContext(userContext);

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
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4 bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700">
            <input
              type="text"
              className="flex-1 px-4 py-2 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-zinc-700 text-zinc-100 placeholder-zinc-400"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button 
              className="px-6 py-2 bg-amber-500 text-zinc-900 font-medium rounded-lg hover:bg-amber-400 transition-colors" 
              onClick={handleSearch}
            >
              Search
            </button>
            <button 
              className="px-6 py-2 bg-amber-500 text-zinc-900 font-medium rounded-lg hover:bg-amber-400 transition-colors"
              onClick={handleTopRated}
            >
              Top Rated
            </button>
           <div className="flex items-center gap-2">
  <label className="text-white" htmlFor="userInput">
    LoggedInUser:
  </label>
  <input
  type="text"
  value={loggedInUser}
  onChange={(e) => setUserInfo(e.target.value)}
  className="px-4 py-2 rounded border bg-zinc-700 text-zinc-100"
/>
</div>

           
          </div>
          
        </div>  
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listOfRestaurants.map((i) => (
            <Link
              key={i.info.id}
              to={`/restaurants/${i.info.id}`}
              className="block hover:no-underline text-current"
            >
              {i.info.promoted ? (
                <RestaurantCaredPromoted resData={i.info}/>
              ) : (
                <RestaurantContainer resData={i.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;