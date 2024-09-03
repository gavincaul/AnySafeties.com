import "../data/TeamStats.json"


var fbURLv2="https://www.thesportsdb.com/api/v2/json/all/leagues";
var commentdata = "";
$.ajax({
    url: fbURLv2,
    data: "message = "+commentdata,
    dataType: "json",
    type: 'POST',
    beforeSend: function(xhr) {
        xhr.setRequestHeader('X-API-KEY', 'xxxxxx');
        xhr.setRequestHeader('Content-Type', 'application/json');
    },
    // If success         
    success: function (resp) {
        console.log(resp);
    },
    // If error
    error: function(e) {
        console.log(e);
    }
});


const fs = require('fs');
const axios = require('axios');

// Function to fetch live data from the API
async function fetchLiveData(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch data: ${error.response ? error.response.status : error.message}`);
        return null;
    }
}

function compareJson(oldData, newData) {
    return JSON.stringify(oldData) !== JSON.stringify(newData);
}

// Main function to update JSON file
async function updateJson(apiUrl, jsonFilePath) {
    const liveData = await fetchLiveData(apiUrl);
    if (!liveData) return;

    let currentData = {};
    if (fs.existsSync(jsonFilePath)) {
        currentData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    }

    if (compareJson(currentData, liveData)) {
        fs.writeFileSync(jsonFilePath, JSON.stringify(liveData, null, 2));
        console.log("JSON file updated.");
    } else {
        console.log("No changes detected. JSON file remains the same.");
    }
}

// Usage
const apiUrl = 'YOUR_API_URL_HERE';  // Replace with your API URL
const jsonFilePath = 'path/to/your/json/file.json';  // Replace with the path to your JSON file
updateJson(apiUrl, jsonFilePath);



