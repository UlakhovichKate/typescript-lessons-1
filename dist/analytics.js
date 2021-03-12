"use strict";
var logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics('tha data');
