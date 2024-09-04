// Function to fetch live data from the API
async function fetchLiveData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
        return null;
    }
}

// Function to compare JSON objects
function compareJson(oldData, newData) {
    return JSON.stringify(oldData) !== JSON.stringify(newData);
}

// Function to detect safeties by checking score changes
function detectSafeties(oldData, newData) {
    let detectedSafeties = [];
    if (!oldData.livescore || !newData.livescore) return detectedSafeties;

    for (let i = 0; i < oldData.livescore.length; i++) {
        if (
            (parseInt(newData.livescore[i].intHomeScore) - parseInt(oldData.livescore[i].intHomeScore) === 2) || 
            (parseInt(newData.livescore[i].intAwayScore) - parseInt(oldData.livescore[i].intAwayScore) === 2)
        ) {
            detectedSafeties.push(newData.livescore[i].strAwayTeam + " vs " + newData.livescore[i].strHomeTeam);
        }
    }
    return detectedSafeties;
}


export async function updateJson(apiUrl, setSafeties) {
    const liveData = await fetchLiveData(apiUrl);
    if (!liveData) return;

    let currentData = {};

    if (compareJson(currentData, liveData)) {
        const safeties = detectSafeties(currentData, liveData);
        if (safeties.length > 0) {
            setSafeties(safeties); // Update safeties in the React component state
        }
        console.log("Safeties detected and updated.");
    } else {
        console.log("No changes detected.");
    }
}
