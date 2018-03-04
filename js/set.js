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


var newSelect = document.createElement('select');

let showCities = (citiesData) => {
    
    console.log("one city", citiesData[1].city);
    for (var i = 0; i < citiesData.length; i++) {
        newSelect.innerHTML += `<option value="${citiesData[i].city}>${citiesData[i].city}></option>`;
        console.log("newSelect", newSelect);
    }
};

// then append the select to an element in the dom
document.getElementById("cities-display").appendChild(newSelect);

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

//create cities select bar

// var index = 0;

// for (var city in citiesData) {
//     var opt = document.createElement("option");
//     opt.value = index;
//     opt.innerHTML = city; // whatever property it has

//     // then append it to the select element
//     newSelect.appendChild(opt);
//     index++;
// }



// var selectDiv = document.getElementById("cities-display");

// var select = document.getElementById("cities-display"),
//     option,
//     i = 0,
//     il = db.cities.length;

// for (; i < il; i += 1) {
//     option = document.createElement('option');
//     option.setAttribute('city', db.cities[i].city);
//     option.appendChild(document.createTextNode(db.cities[i].text));
//     select.appendChild(option);
// }



// filter restaurants by city

// var selector = document.getElementById("selector");

// document.getElementById("rest-display").innerHTML = selector.addEventListener("click", db.filterCities());



// var arrByID = restaurants.filter(db.filterCities);

// console.log('Filtered Array\n', arrByID);


// console.log('Number of Invalid Entries = ', invalidEntries);