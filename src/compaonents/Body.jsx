 import RestaurantContainer from "./RestaurantContainer";
 import resList from "../utils/mockdata";
 import { useState } from "react";
 const Body=()=>{
    // State varibale js 
    const [ListOfRestaurnats,SetListOfRestaurnats]=useState(resList);


  //   // normal js variable
  //   let ListOfRestaurnats=[
  //       {
    
  //   data: {
  //     id: '121603',
  //     name: 'Kannur Food Point',
  //     cloudinaryImageId: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
  //     cuisines: ['Kerala', 'Chinese'],
  //     avgRating: '3.9',
  //     costForTwo: 30000,
  //     deliveryTime: 24,
  //   },
  // },
  // {
   
  //   data: {
  //     id: '239',
  //     name: 'Meghana Foods',
  //     cloudinaryImageId: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?w=300&h=200&fit=crop',
  //     cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
  //     avgRating: '4.4',
  //     costForTwo: 50000,
  //     deliveryTime: 16,
  //   },
    

  // },{
  //   data: {
  //     id: '241',
  //     name: 'Meghana Foods',
  //     cloudinaryImageId: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?w=300&h=200&fit=crop',
  //     cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
  //     avgRating: '4.4',
  //     costForTwo: 50000,
  //     deliveryTime: 16,
  //   },
  // }

  //   ];
    return (
      <div className="body">
        <div className="filter"><button className="filter_btn" onClick={()=>{
            const fileteredList=ListOfRestaurnats.filter((res)=>res.data.avgRating>4);
            SetListOfRestaurnats(fileteredList);
            
            
        }}>Top rated restaurant</button>
        </div>
        <div className="conatiner">
          {/* <RestaurantContainer resName="KFC" couisne="Chicken,burger " />  */}
          {/* passing props to fn */}
          {/* <RestaurantContainer resData={resList[0]}/>
           <RestaurantContainer resData={resList[1]}/> */}
           {
            ListOfRestaurnats.map(i=><RestaurantContainer key={i.data.id} resData={i}/>)
           }
 </div>
 </div>);
 };
  
  export default Body;