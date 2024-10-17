const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de défiler
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'; // Alterne l'affichage du sous-menu
});

const baseline = document.querySelector('.baseline');
const navbar = document.querySelector('.navbar');
//const navbarHeight = 230;//navbar.offsetHeight; // Hauteur de la navbar

// Récupère la position de l'élément par rapport au haut de l'écran
const rect = baseline.getBoundingClientRect();
const distanceFromTop = rect.top; // Hauteur par rapport au haut de l'écran


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Position de défilement actuelle

    if (scrollY > distanceFromTop-20) {
        baseline.classList.add('fixed'); // Ajoute la classe fixe
    } else {
        baseline.classList.remove('fixed'); // Retire la classe fixe
    }
});
