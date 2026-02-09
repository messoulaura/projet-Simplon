const bouton = document.getElementById("monBouton");

bouton.addEventListener("click", function () {
    alert("Bienvenue sur mon site personnel !");
});

const annee = new Date().getFullYear();
document.getElementById("year").textContent = annee;