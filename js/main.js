"use strict";

console.log("main js here");

let db = require("./getData"); 


//show items function prints data to the DOM
let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");
    console.log("restaurantData", restaurantData);
    restaurantData.forEach( (restaurant) => {
        // let restBlock = buildRestItem(restaurant);
        restDisplay.innerHTML += `<section class="block-wrapper"><h3>${restaurant.restaurant}</h3><h4><strong>My Rating: ${restaurant.my_rating}</strong></h4><p>Last Visited: ${restaurant.date_visited}</p></section>`;
        
    });
};

let restPromise = db.restaurants.loadRestaurants()
.then(
    (resolve) => {
        console.log("then resolve", resolve);
        let sortedData = resolve.sort(function (a, b) {
            return b.my_rating - a.my_rating;
        });
    showItems(sortedData);
},
(reject) => {
    console.log("Oops Something went wrong",reject);
});

//Cities Promise

let showCities = (citiesData) => {
    let citiesDisplay = document.getElementById("cities-display");
    console.log("citiesData", citiesData);
    citiesData.forEach((city) => {
        citiesDisplay.innerHTML += `<section class="city-wrapper"><h3>${city.city}</h3></section>`;
    });
};

let citiesPromise = db.cities.loadCities()
.then(
    (resolve) => {
        console.log("cities resolve", resolve);
        //possibly sort cities here
        showCities(resolve);
        return resolve;

    }
);
