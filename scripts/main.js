function initializePage() {
    initiateSlider();
    initiatePictureShow();
    initiateActivities();
}

function showNavbar() {
    document.getElementById('navbar').classList.add('navigation-bar-show');
}

function hideNavbar() {
    document.getElementById('navbar').classList.remove('navigation-bar-show');
}