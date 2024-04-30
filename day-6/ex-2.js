function initializeCharacterStats() {
  characterStats = [];
}

addDestination(destinationName, travelDate){
    return destinationName+travelDate;
}


function findCharacterStrength(characterName) {
    var found = false;
    for (var i = 0; i < characterStats.length; i++) {
        if (characterStats[i][0] === characterName) {
            // Step 3: If the character is found, log the strength of the character
            console.log(characterName + "'s strength is " + characterStats[i][1]);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Character was not found");
    }
}
