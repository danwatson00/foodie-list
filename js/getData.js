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
    console.log("in getRestaurants", restaurantItems);
    return restaurantItems;
};

restaurants.loadRestaurants = () => {               // loadRestaurants is a function 
    return new Promise( (resolve, reject) => {         //first line of the Promise
        let request = new XMLHttpRequest(); //establishes request as the variable for the XHR request
        request.onload = function (){
            if (request.status === 200){                //make sure xhr is successful
                let data = JSON.parse(request.responseText); //response text is a property of the variable xhr and it is parsing the data and placing it in data
                console.log("what is this data?", data);              //console log the parsed data??
                resolve(parseData(data));        //resolve the request = fulfill the promise
            } else {
                reject(new Error("XMLHttpRequest Error", request.statusText));  //reject the request
            }
        };
        request.open('GET', "../js/restaurants.json");
        request.send();
    });
    
};

//GET CITIES DATA

cities.getCities = () => {
    console.log("in getCities", citiesItems);
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
                console.log("city data:", data);
                resolve(parseCities(data));
            } else {
                reject(new Error("SMLHttpRequest Error", xhrRequest.statusText));
            }
        };
        xhrRequest.open('GET', "../js/cities.json");
        xhrRequest.send();
    });
};

module.exports = { restaurants, cities };