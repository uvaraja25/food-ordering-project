import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


   
   
 



const Body = () => {
    const [restaurants,setRestaurants] = useState(  resList);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   const filteredRestaurants = restaurants.filter(
                    (res) => res.info.avgRating>4
                    );
                    console.log(filteredRestaurants);
                    setRestaurants(filteredRestaurants);
                 }}>
                     Top Rated Restaurants
                     </button></div>
            <div className="restaurant-container">
                {
                    restaurants.map(restaurant=> (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Body;