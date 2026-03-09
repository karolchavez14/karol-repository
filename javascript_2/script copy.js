console.log("Glimmung Aesthetic Room Ideas loaded 💜✨");

// CONSTANTE
const SITE_NAME = "Glimmung";

// ARRAY DE IDEAS
let decorIdeas = [
  "LED fairy lights",
  "Butterfly wall stickers",
  "Neon moon lamp",
  "Heart shaped pillows",
  "Pastel shelves",
  "Vintage posters",
  "Crystal lamps"
];

// FUNCION PARA MOSTRAR NOTIFIER
function showNotifier(message) {
  let notifier = document.getElementById("notifier");
  if (!notifier) return;

  notifier.innerText = message;
  notifier.style.display = "block";

  // Desaparece después de 3 segundos
  setTimeout(() => {
    notifier.style.display = "none";
  }, 3000);
}

// ONLOAD EVENT
window.onload = function() {
  console.log(SITE_NAME + " page loaded!");

  // CAMBIAR ESTILO DEL HOME
  let homeSection = document.getElementById("Home");
  if (homeSection) {
    homeSection.setAttribute("data-visited", "true");
    homeSection.style.boxShadow = "0 0 15px pink";
  }

  // Notifier de bienvenida
  setTimeout(() => {
    showNotifier("✨ Welcome to Glimmung! Get inspired and decorate your dream room 💜");
  }, 1000);
};

// EFECTO SOBRE CARDS
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].onmouseover = function() {
    this.style.transform = "scale(1.04)";
    this.style.transition = "0.3s";
  };
  cards[i].onmouseout = function() {
    this.style.transform = "scale(1)";
  };
  cards[i].onclick = function() {
    showNotifier("✨ You discovered a new aesthetic section!");
  };
}

// EFECTO SOBRE IMÁGENES
let images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.transform = "scale(1.15)";
    this.style.transition = "0.3s";
    this.style.border = "3px solid #ff9eea";
  };
  images[i].onmouseout = function() {
    this.style.transform = "scale(1)";
    this.style.border = "none";
  };
  images[i].onclick = function() {
    showNotifier("💡 Idea: " + this.alt + "!");
  };
}

// FUNCION CON ARGUMENTOS + RETURN
function decorSuggestion(items, budget) {
  if (budget > 120) {
    return "💎 You can create a luxury aesthetic room!";
  } else if (budget > 60) {
    return "🌸 You can decorate with cute accessories!";
  } else {
    return "✨ DIY decorations will make your room unique!";
  }
}

// LOOP POR ARRAY
for (let i = 0; i < decorIdeas.length; i++) {
  console.log("💡 Decor Idea: " + decorIdeas[i]);
}

// FUNCION IDEA ALEATORIA
function randomIdea() {
  let randomIndex = Math.floor(Math.random() * decorIdeas.length);
  return decorIdeas[randomIndex];
}

// TIMER PARA IDEA ALEATORIA
setTimeout(() => {
  showNotifier("✨ New aesthetic idea: " + randomIdea());
}, 5000);
