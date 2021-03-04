'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
    $.get('/lab/today', onServerResponse);
}

// Function that is called when the server responds to the AJAX call
function onServerResponse(data){
    var labElementId = getLabElementId(data.id);
    var labElement = $(labElementId);
    labElement.css({'background': 'yellow'});
}


// Function to format the CSS selector --ERROR FIX: should be "lab-" instead of "lab_"
function getLabElementId(id){
    var labElementId = '#lab-' + id;
    console.log(labElementId);
    return labElementId;
}