// Header scroll
function fixHeaderOnScroll() {
    const header = document.querySelector('header');
  
    if (window.scrollY >= 1) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
  
window.addEventListener('scroll', fixHeaderOnScroll);
fixHeaderOnScroll();


const lightbox = GLightbox({
    selector: '.galery .wrapper a',
    touchNavigation: true,
    loop: true
});
