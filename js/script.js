function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icone = document.getElementById("menu-icon");
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icone.classList.remove("fa-x");
        icone.classList.add("fa-bars");
    } else {
        menuMobile.classList.add('open');
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-x");
    }
}
