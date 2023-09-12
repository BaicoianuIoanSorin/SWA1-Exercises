let loading = true;
let responseJSON = '';

fetch('http://localhost:8080/data/Horsens')
    .then(function (response) {
        return response.json(); // Parse the JSON and return the promise
    })
    .then(function (data) {
        console.log(data);// Use the parsed JSON data
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    })
    .finally(() => {
        // This will execute whether the request succeeds or fails
        loading = false;
    });

// while(loading) {
//     console.log("Still loading....");
// }
//
// if(!loading) {
//     console.log("Here is the data: " + responseJSON);
// }


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/data/Horsens', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Successful response, parse and use the data
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        // Request failed
        console.log("Something went wrong!");
    }

    // Code to execute whether the request succeeds or fails
    loading = false;
};

xhr.onerror = function () {
    // Network error
    console.log("Network error occurred");
    loading = false;
};

xhr.send();


