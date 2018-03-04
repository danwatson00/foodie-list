"use strict";

console.log("getData.js is here!");

var restaurants = {};

let restaurantItems = [];

var cities = {};

let citiesItems = [];

//GET RESTAURANT DATA
let parseData = (data) => {
    data.restJson.forEach((element) => {
        restaurantItems.push(element);
    });
    return restaurantItems;
};

restaurants.getRestaurants = () => {
    return restaurantItems;
};

restaurants.loadRestaurants = () => {              
    return new Promise( (resolve, reject) => {         //first line of the Promise
        let request = new XMLHttpRequest(); //establishes request as the variable for the XHR request
        request.onload = function (){
            if (request.status === 200){                //makes sure xhr is successful
                let data = JSON.parse(request.responseText); //response text is a property of the variable xhr and it is parsing the data and placing it in data
                resolve(parseData(data));        //resolve the request = fulfill the promise
            } else {
                reject(new Error("XMLHttpRequest Error", request.statusText));  //reject the request due to error
            }
        };
        request.open('GET', "../js/restaurants.json");
        request.send();
    });
    
};

//GET CITIES DATA

cities.getCities = () => {
    return citiesItems;
};

let parseCities = (data) => {
    data.JSONcities.forEach((element) => {
        citiesItems.push(element);
    });
    return citiesItems;
};


cities.loadCities = () => {
    return new Promise((resolve, reject) => {
        let xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = function (){
            if (xhrRequest.status === 200){
                let data = JSON.parse(xhrRequest.responseText);
                resolve(parseCities(data));
            } else {
                reject(new Error("XMLHttpRequest Error", xhrRequest.statusText));
            }
        };
        xhrRequest.open('GET', "../js/cities.json");
        xhrRequest.send();
    });
};

// filterCities();

    // var filteredCities = cities.filter(function (filterCities) {
    //     return restaurants.city_id === cities.id;
    // });
    // }
module.exports = { restaurants, cities };