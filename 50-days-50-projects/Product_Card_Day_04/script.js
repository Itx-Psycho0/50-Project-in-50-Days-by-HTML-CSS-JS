const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const heading1 = document.querySelector(".card-top-text h1");
const heading2 = document.querySelector(".card-bottom h1");
const p = document.querySelector(".card-top-text p");

color2.addEventListener("click", () => {
  container.classList.add("change");
    heading1.innerText = "Rem";
    heading2.innerText = "Rem";
    p.innerText = " Rem also has abilities like flight, immortality, and limited invisibility to those who haven't touched a Death Note.";
});

color1.addEventListener("click", () => {
  container.classList.remove("change");
   heading1.innerText = "Ryuk";
   heading2.innerText = "Ryuk";
   p.innerText = "Ryuk, a Shinigami from Death Note, possesses several supernatural powers and abilities. He is immortal, can pass through walls and objects, and is invisible to those who don't possess a Death Note or a piece of it.";
});