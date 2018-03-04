"use strict";

console.log("set.js is here");

let db = require("./getData"); 



//show items function prints data to the DOM
let showItems = (restaurantData) => {
    let restDisplay = document.getElementById("rest-display");
    restaurantData.forEach((restaurant) => {
        restDisplay.innerHTML += `<section class="block-wrapper"><h2 class="rest-name">${restaurant.restaurant}</h2><h3 class="rating-btn">My Rating<br/>${restaurant.my_rating}</h3><h5 class="visited-date">Last Visited: ${restaurant.date_visited}</h5></section>`;

    });
};



//Restaurant Promise
let restPromise = db.restaurants.loadRestaurants()
    .then(
        (resolve) => {
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
    var x = document.createElement("select");
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
            //could filter cities possibly go here
            showCities(resolve);
            console.log("I hope this works", resolve[1].id);
            return resolve;

        }
    );



//Filter Restaurants by City
var invalidEntries;

// // create an event listener for cities THIS DOESNT WORK
document.getElementById("select").addEventListener("change", filterCities);
function filterCities(this.id, restaurants) () => {
    for (var i = 0; i < restaurants.length; i++) {
        if (cities.id === restaurants[i].city_id) {
            return true;
        } else
            invalidEntries++;
        return false;
    }
}

// var arrByID = restaurants.filter(db.filterCities);  this doesnt work

console.log('Filtered Array\n', arrByID);

console.log('Number of Invalid Entries = ', invalidEntries);