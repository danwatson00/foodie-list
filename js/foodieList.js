"use strict";

console.log("foodieList.js is here!");

var restaurants = {};

let restaurantItem = [];


let parseData = (data) => {
    data.restJson.forEach((element) => {
        restaurantItem.push(element);
        console.log("in parseData:", restaurantItem);
    });
    console.log("in parseData:", restaurantItem);
    console.log("data", data);
    return restaurantItem;
};


restaurants.getRestaurants = () => {
    console.log("in getRestaurants", restaurantItem);
    return restaurantItem;
};

var xhrRequest = new XMLHttpRequest(); //establishes xhrRequest as the global variable for the XHR request

restaurants.loadRestaurants = () => {               // what is loadRestaurants?
    return new Promise((resolve, reject) => {         //first line of a Promise
        if (xhrRequest.status === 200){                //make sure xhr is successful
            let data = JSON.parse(xhrRequest.responseText); //response text is a property of the variable xhr and it is parsing the data and placing it in data
            console.log("data: ", data);              //console log the parsed data??
            resolve(xhrRequest.responseText);        //resolve the request = fulfill the promise
        } else {
            reject(new Error("XMLHttpRequest Error", xhrRequest.statusText));  //reject the request
        }
        xhrRequest.open('GET', "./restaurants.json");
        xhrRequest.send();
    });
    
};



console.log("restaurants", restaurants);

module.exports = { restaurants };