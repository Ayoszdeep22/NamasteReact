const RestaurantContainer = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data;
  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          cloudinaryImageId
        }
        alt={name}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantContainer;