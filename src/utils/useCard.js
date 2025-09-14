import { useEffect, useState } from "react";
import resList from "./mockdata"; // Add this import
import { MENU_API } from "./constansts";

const useCard = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        MENU_API);
      const json = await response.json();
      const list =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      
      // If API yields no data, fallback to mock data
      const finalList = list.length > 0 ? list : resList;
      setListOfRestaurants(finalList);
      setOriginalList(finalList);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setListOfRestaurants(resList);
      setOriginalList(resList);
    }
  };

  return { listOfRestaurants, setListOfRestaurants, originalList };
};

export default useCard;