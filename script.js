// dark mode
const body=document.querySelector('.body');
const theme_icon = document.querySelector('.theme-icon i');
theme_icon.onclick = function(){
    body.classList.toggle('dark-theme');
    const colorChange = body.classList.contains('dark-theme');
    theme_icon.classList = colorChange ? "bx bx-moon" : "bx bx-sun";
};
// nav-menu for mobile
const menuOpenIcon = document.querySelector('.mobile-nav-icon i');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
menuOpenIcon.onclick = function(){
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    menuOpenIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu";
};