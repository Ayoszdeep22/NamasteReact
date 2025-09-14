import { useEffect, useState } from "react";
import { API_URL } from "../utils/constansts.js";  
const useRestauranMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    //fetch data
    useEffect(()=>{
        fetchData();

    },[]);
    const fetchData=async()=>{
        const data =await fetch(
             API_URL+resId
        );
         const json = await data.json();
           setResInfo(json.data); 
    } 


return resInfo;
}
export default useRestauranMenu;