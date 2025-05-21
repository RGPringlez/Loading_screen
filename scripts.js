
let quotes = document.getElementById("info");

let texts = ["I love hello world",
    "Is this Minecraft?", 
    "Hello from the Dev team, we hope you are enjoying this test", 
    "Looking for different colour themes? Click the menu icon > settings > colour themes", 
    "Any extra ideas for this function?",
    "Do you prefer light or dark mode?"

];

setInterval(() => {

    let randomIndex = Math.floor(Math.random() * texts.length);
    quotes.textContent = texts[randomIndex];
    

}, 2000);




