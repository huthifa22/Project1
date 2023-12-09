// Hamburger functionallity in and out
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var sidebar = document.querySelector('.main-sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
});
