// ======= SCRIPT POUR LE MENU BURGER =======

// on récupère les éléments
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

// ouverture / fermeture du menu quand on clique sur le burger
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});

// fermer le menu quand on clique sur un lien du menu mobile
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileMenu.classList.remove("active");
    });
});
