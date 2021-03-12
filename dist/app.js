"use strict";
var button = document.querySelector('button');
var appId = 'ula';
function clickHandler(message, age) {
    console.log('Clicked ' + message);
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
add(10, 21);
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'you are welcome', 30));
}
