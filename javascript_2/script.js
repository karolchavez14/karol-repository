console.log("Glimmung loaded 💜✨");


const SITE_NAME = "Glimmung";


const savedImages = [];


const favorites = document.getElementById("favorites"); // by ID
const likeButtons = document.getElementsByClassName("like-btn"); // by class
const allImages = document.getElementsByTagName("img"); // by tag


window.onload = function () {

    console.log(SITE_NAME + " page loaded!");

    const header = document.querySelector("header");

    // Change CSS
    header.style.color = "#ff9aff";

    // Add attribute
    header.setAttribute("data-loaded", "true");

};

for (let i = 0; i < likeButtons.length; i++) {

    likeButtons[i].onclick = function () {

        const image = this.parentElement.querySelector("img");
        const clone = image.cloneNode(true);

        // Remove placeholder text
        if (favorites.children.length === 1) {
            favorites.innerHTML = "";
        }

        favorites.appendChild(clone);

        // Use ARRAY
        savedImages.push(image.src);

    };

}


for (let i = 0; i < allImages.length; i++) {

    allImages[i].onmouseover = function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s";
    };

    allImages[i].onmouseout = function () {
        this.style.transform = "scale(1)";
    };

}


function checkFavorites(amount, limit) {

    if (amount > limit) {
        return "You saved MANY ideas ✨";
    } 
    else if (amount > 0) {
        return "Cute collection 💜";
    } 
    else {
        return "Start saving ideas 🌸";
    }

}


let timer = setTimeout(showSuggestion, 6000);


function showSuggestion() {

    const message = checkFavorites(savedImages.length, 5);

    console.log(message);

    // Show message on page
    let msg = document.createElement("p");
    msg.textContent = message;
    msg.style.color = "#ff9aff";

    favorites.appendChild(msg);

    // Stop timer
    clearTimeout(timer);

}
