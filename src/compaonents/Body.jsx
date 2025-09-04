 import RestaurantContainer from "./RestaurantContainer";
 const Body=()=>{
    return (
      <div className="body">
        <div className="search">SEARCH</div>
        <div className="conatiner">
          {/* <RestaurantContainer resName="KFC" couisne="Chicken,burger " />  */}
          {/* passing props to fn */}
          {/* <RestaurantContainer resData={resList[0]}/>
           <RestaurantContainer resData={resList[1]}/> */}
           {
            resList.map(i=><RestaurantContainer key={i.data.id} resData={i}/>)
           }
 </div>
 </div>);
 };
  const resList = [
  {
    type: 'restaurant',
    data: {
      id: '121603',
      name: 'Kannur Food Point',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      cuisines: ['Kerala', 'Chinese'],
      avgRating: '3.9',
      costForTwo: 30000,
      deliveryTime: 24,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '229',
      name: 'Meghana Foods',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?w=300&h=200&fit=crop',
      cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
      avgRating: '4.4',
      costForTwo: 50000,
      deliveryTime: 16,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '428',
      name: 'Biryani Pot',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?w=300&h=200&fit=crop',
      cuisines: ['North Indian', 'Biryani'],
      avgRating: '3.9',
      costForTwo: 50000,
      deliveryTime: 19,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '223',
      name: 'Truffles',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop',
      cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
      avgRating: '4.4',
      costForTwo: 45000,
      deliveryTime: 30,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '425',
      name: 'Hotel Empire',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop',
      cuisines: ['North Indian', 'Kebabs', 'Biryani'],
      avgRating: '4.1',
      costForTwo: 45000,
      deliveryTime: 23,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '201224',
      name: 'Asha Tiffins',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1567337712385-da821b4bb838?w=300&h=200&fit=crop',
      cuisines: ['Indian', 'South Indian', 'Beverages'],
      avgRating: '4.4',
      costForTwo: 20000,
      deliveryTime: 26,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '59593',
      name: 'Al Daaz',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      cuisines: ['American', 'Arabian', 'Chinese', 'Desserts'],
      avgRating: '4.3',
      costForTwo: 40000,
      deliveryTime: 36,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '56589',
      name: 'Roti-Wala',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop',
      cuisines: ['North Indian', 'Home Food', 'Thalis'],
      avgRating: '4.2',
      costForTwo: 20000,
      deliveryTime: 37,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '560153',
      name: 'Rice Bowl',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?w=300&h=200&fit=crop',
      cuisines: ['North Indian', 'South Indian'],
      avgRating: '4.1',
      costForTwo: 30000,
      deliveryTime: 22,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '337335',
      name: 'Kannur Food Kitchen',
      cloudinaryImageId: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      cuisines: ['Kerala', 'Biryani', 'Beverages'],
      avgRating: '3.8',
      costForTwo: 20000,
      deliveryTime: 24,
    },
  },
];
  export default Body;