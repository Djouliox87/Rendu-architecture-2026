window.addEventListener("scroll", function () {
      const navbar = document.querySelector("header");

      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
    window.addEventListener("scroll", function () {
      const container = document.querySelector(".container2");
      if (window.scrollY > 200) {
        container.classList.add("scrolle");
      }
    });

    const slides = document.querySelector(".slides");
const slider = document.querySelector(".slider");
const nb = slides.children.length;
const pointsBox = document.querySelector(".points");
let index = 0;

// crée un point par image
for (let i = 0; i < nb; i++) {
  const p = document.createElement("span");
  p.className = "point";
  p.addEventListener("click", () => aller(i));
  pointsBox.appendChild(p);
}

function aller(i) {
  index = (i + nb) % nb;   // revient à la première image après la dernière
  slides.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll(".point").forEach((p, n) => {
    p.classList.toggle("actif", n === index);
  });
}

document.querySelector(".droite").addEventListener("click", () => aller(index + 1));
document.querySelector(".gauche").addEventListener("click", () => aller(index - 1));

// défilement automatique, en pause au survol
let auto = setInterval(() => aller(index + 1), 5000);
slider.addEventListener("mouseenter", () => clearInterval(auto));
slider.addEventListener("mouseleave", () => {
  auto = setInterval(() => aller(index + 1), 5000);
});

aller(0);