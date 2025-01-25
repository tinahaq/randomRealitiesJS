// Roll on arrays and return em dashed result
function getRandomResult(section, entry){

    // Validate parameters
    if(!OPTIONS.hasOwnProperty(section)){
        return 'Invalid Section';
    }
    if(!OPTIONS[section].hasOwnProperty(entry)){
        return 'Invalid Entry';
    }

    // Loop over each array within the entry to build the result
    var parts = OPTIONS[section][entry].length;
    var result = '';
    for(var part = 0; part < parts; part++){

        // Roll on individual result array and add to our final result
        var roll = Math.floor(Math.random() * OPTIONS[section][entry][part].length);

        // Add the rolled part to the result
        result += OPTIONS[section][entry][part][roll] + '—';
    }

    // Remove the ending em dash and return the result
    return result.slice(0, -1);
}

// Update all of the general section buttons
function updateGeneralButtons(){
    this.getField("generalSimple").buttonSetCaption(getRandomResult("general", "simple"));
    this.getField("generalComplex").buttonSetCaption(getRandomResult("general", "complex"));
    this.getField("generalAbstract").buttonSetCaption(getRandomResult("general", "abstract"));
    this.getField("generalIntensity").buttonSetCaption(getRandomResult("general", "intensity"));
}