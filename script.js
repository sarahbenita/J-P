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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let errorMessages = [];

        if (username.length < 4) {
            errorMessages.push('Le nom d\'utilisateur doit contenir au moins 4 caractères.');
        }

        if (password.length < 8) {
            errorMessages.push('Le mot de passe doit contenir au moins 8 caractères.');
        }

        if (password !== confirmPassword) {
            errorMessages.push('Les mots de passe ne correspondent pas.');
        }

        if (errorMessages.length > 0) {
            event.preventDefault();
            alert(errorMessages.join('\n'));
        }
    });
});
