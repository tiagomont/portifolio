// header scrolling effect
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
})

// menu amburguer
const navSlide = () => {
    const amburguer = document.getElementById('menu-hamburguer');
    const nav = document.querySelector('nav.menu');
    const navLinks = document.querySelectorAll('.nav-link');

    amburguer.onclick = () => {
        nav.classList.toggle('nav-active');

        // Animation links
        navLinks.forEach((link, index) => {
            link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });

        // Animation hamburguer
        amburguer.classList.toggle('toggle');
    }
}


window.onload = () => navSlide();