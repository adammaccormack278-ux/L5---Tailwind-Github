function greeter(person: string) {
    return "Hello, " + person;
}

let userName = "Adam Maccormack";
let greeting = document.querySelector('.greeting');

if (greeting) {
    greeting.textContent = greeter(userName);
}
