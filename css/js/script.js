
/* NAVBAR SCROLL EFEKTİ */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* SAYFA İÇERİKLERİNİN GÖRÜNME ANİMASYONU */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(function (element) {
    observer.observe(element);
});


/* MOBİL MENÜ LİNKİNE TIKLANDIĞINDA MENÜYÜ KAPAT */

const menuLinks = document.querySelectorAll(".nav-link");
const mainMenu = document.querySelector("#mainMenu");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const collapse = bootstrap.Collapse.getOrCreateInstance(mainMenu);

            collapse.hide();

        }

    });

});


/* OTOMATİK YIL */

document.querySelector("#currentYear").textContent =
    new Date().getFullYear();
