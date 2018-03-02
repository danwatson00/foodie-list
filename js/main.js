"use strict";

console.log("main js here");

let db = require("./getData"); 

// console.log("restaurants in main", restaurants);

// var allRestData;

let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");
    console.log("restaurantData", restaurantData);
    restaurantData.forEach( (restaurant) => {
        // console.log(restaurant.restaurant);
        let restBlock = buildRestItem(restaurant);
        restDisplay.innerHTML += `<section class="block-wrapper" style="border: 2px solid #93908F; background-color:#000000">`;
        restDisplay.innerHTML += `<h3>${restaurant.restaurant}</h3>`;
        restDisplay.innerHTML += `<h4><strong>My Rating: ${restaurant.my_rating}</strong></h4><p>Last Visited: ${restaurant.date_visited}</p>`;
    });
};


let buildRestItem = (rest) => {
    let block = "",
        wrapper = `<section class="block-wrapper" style="border: 2px solid #93908F; background-color:#000000">`,
        title = `<h3>${rest}.restaurant</h3>`;
        // return block;
};


let restPromise = db.restaurants.loadRestaurants()
    // console.log("restPromise", restPromise);
.then(
    (resolve) => {
    console.log("then resolve", resolve);
    // allRestData = resolve;
        let sortedData = resolve.sort(function (a, b) {
            return b.my_rating - a.my_rating;
        });
    showItems(sortedData);
},
(reject) => {
    console.log("Oops Something went wrong",reject);

});

// module.exports = {allRestData};
