"use strict";

console.log("set.js is here");

let db = require("./getData"); 

//show items function prints data to the DOM
let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");
    console.log("restaurantData", restaurantData);
    restaurantData.forEach((restaurant) => {
        // let restBlock = buildRestItem(restaurant);
        restDisplay.innerHTML += `<section class="block-wrapper"><h2 class="rest-name">${restaurant.restaurant}</h2><h3 class="rating-btn">My Rating<br/>${restaurant.my_rating}</h3><h5 class="visited-date">Last Visited: ${restaurant.date_visited}</h5></section>`;

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
            console.log("Oops Something went wrong", reject);
        });

//Cities Promise

//Dont need to show this way anymore but THIS WORKS
let showCities = (citiesData) => {
    let citiesSelector = document.getElementById("selector");
    console.log("citiesData", citiesData);
    citiesData.forEach((city) => {
        citiesSelector.innerHTML += `<option value="${city.city}>`;
        citiesSelector.innerHTML += `<h4>${city.city}</h4>`;
        citiesSelector.innerHTML += `</option>`;
    });
};

let citiesPromise = db.cities.loadCities()
    .then(
        (resolve) => {
            console.log("cities resolve", resolve);
            //possibly sort cities here
            showCities(resolve);
            console.log("I hope this works", resolve[1].id);
            return resolve;

        }
    );


// filter restaurants by city

var invalidEntries = 0;


// var selector = document.getElementById("selector");

// document.getElementById("rest-display").innerHTML = selector.addEventListener("click", db.filterCities());



// var arrByID = restaurants.filter(db.filterCities);

// console.log('Filtered Array\n', arrByID);


// console.log('Number of Invalid Entries = ', invalidEntries);