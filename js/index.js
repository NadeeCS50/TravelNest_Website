

const quotes = [
    "To travel is to evolve - Pierre Bernardo",
    "We travel not to escape life, but for life not to escape us",
    "Not all those who wander are lost - Tolkienhings"
];

let index = 0;

setInterval(() => {
    index++;
    if (index >= quotes.length) index = 0;
    document.getElementById("quote").innerText = quotes[index];
}, 3000);



let day = new Date().getDate();
let selected = destinations[day % destinations.length];

document.getElementById("destination-name").innerText = selected.name;
document.getElementById("destination-text").innerText = selected.text;
document.getElementById("destination-image").src = selected.image;
