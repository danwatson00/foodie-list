"use strict";

console.log("main js here");

let list = require("./foodieList");

let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");

    restaurantData.forEach( (restaurant) => {
        let restBlock = buildRestItem(restaurant);
        restDisplay.innerHTML += restBlock;
    });
};


let buildRestItem = (rest) => {
    let block = "",
        wrapper = `<section class="block-wrapper" style="border: 2px solid #93908F; background-color:#000000">`,
        title = `<h3>${rest.restaurant}</h3>`;
        return block;
};


let restPromise = list.restaurants.loadRestaurants()
.then(
    (resolve) => {
    console.log("resolve", resolve);
    showItems(resolve);
},
(reject) => {
    console.log("Oops SOmething went wrong",reject);

});