"use strict";

console.log("main js here");

let db = require("./getData");  

var allRestData;

let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");
    console.log("restaurantData", restaurantData);
    restaurantData.forEach( (restaurant) => {
        console.log(restaurant.restaurant);
        let restBlock = buildRestItem(restaurant);
        restDisplay.innerHTML += `<section class="block-wrapper" style="border: 2px solid #93908F; background-color:#000000">`;
        restDisplay.innerHTML += `<h3>${restaurant.restaurant}</h3>`;
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
    allRestData = resolve;
    //add a function to sort HERE when ready 
    showItems(resolve);
},
(reject) => {
    console.log("Oops Something went wrong",reject);

});

// module.exports(allRestData);
