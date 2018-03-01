"use strict";

console.log("foodieList.js is here!");

var restaurants = {};

let restaurantInd = [];

let parseData = (data) => {
    data.restJson.forEach( (element) => {
        restaurantInd.push(element);
        console.log("in parseData:", restaurantInd);
    });
    console.log("in parseData:", restaurantInd);
    /* console.log("element", element); */
    console.log("data", data);
    return restaurantInd;
};


restaurants.getRestaurants = () => {
    console.log("in getRestaurants", restaurantInd);
    return restaurantInd;
};

var xhrRequest = new XMLHttpRequest(); //establishes xhrRequest as the global variable for the XHR request

restaurants.loadRestaurants = () => {   // states that load restaurants is a function on xhr??
    return new Promise((resolve, reject) => {   //first line of a Promise
        if (xhrRequest.status === 200){      //make sure xhr is successful
            let data = JSON.parse(xhrRequest.responseText); //response text is a property of the variable xhr and it is parsing the data and placing it in data
            console.log("data: ", data);
            resolve(xhrRequest.responseText);
        } else {
            reject(new Error("XMLHttpRequest Error", xhrRequest.statusText));
        }
        xhrRequest.open('GET', "./restaurants.json");
        xhrRequest.send();
    });
    
};

console.log("restaurants", restaurants);

module.exports = { restaurants };