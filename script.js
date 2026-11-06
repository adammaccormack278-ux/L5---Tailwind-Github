"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let userName = "Adam Maccormack";
let greeting = document.querySelector('.greeting');
if (greeting) {
    greeting.textContent = greeter(userName);
}
