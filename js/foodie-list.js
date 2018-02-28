"use strict";

console.log("foodie-list.js is here!");

var restaurants = {};

var cities = {};

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


module.exports = { restaurants, cities };