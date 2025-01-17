//menu
let menu = document.querySelector (".menu-icon");
let navbar = document.querySelector (".navbar");

menu.onclick =()=>{
menu.classList.toggle('move')
navbar.classList.toggle('open-menu')
};

//Close Menu on ScroLL
window.onscroll =()=> {
    menu.classList.remove('move')
    navbar.classList.remove('open-menu')
}

//ScrollReveal
const animate = ScrollReveal({
    origin: 'top',
    duration: '2500',
    distance: '60px',
    Delay: '400',
});

animate.reveal('.home-text', { origin:'left'});
animate.reveal('.home-img', { origin:'bottom'});
animate.reveal('.heading,.newsletter h2', { origin:'top'});

animate.reveal('header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.t-box,.newsletter', {
     interval:100});