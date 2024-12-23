const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.remove('bc-transparente');
        
    } else {
        navbar.classList.add('bc-transparente');
    }
};