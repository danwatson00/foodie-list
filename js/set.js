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

var selectDiv = document.getElementById("selector");

let showCities = (citiesData) => {
    var x = document.createElement("SELECT");
    x.setAttribute("id", "mySelect");
    selectDiv.appendChild(x);

    for (var i = 0; i < citiesData.length; i++) {
    var z = document.createElement("option");
    z.setAttribute("value", `${citiesData[i].id}`);
    var t = document.createTextNode(`${citiesData[i].city}`);
    z.appendChild(t);
    document.getElementById("mySelect").appendChild(z);
    }
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

//Filter Restaurants by City
var invalidEntries;

// // create an event listener for cities
document.getElementById("SELECT").addEventListener("change", filterCities);
function filterCities(cities, restaurants) {
    for (var i = 0; i < restaurants.length; i++) {
        if (cities.id === restaurants[i].city_id) {
            return true;
        } else
            invalidEntries++;
        return false;
    }
}


// filter restaurants by city

// var selector = document.getElementById("selector");

// document.getElementById("rest-display").innerHTML = selector.addEventListener("click", db.filterCities());



// var arrByID = restaurants.filter(db.filterCities);

// console.log('Filtered Array\n', arrByID);


// console.log('Number of Invalid Entries = ', invalidEntries);