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

if(document.querySelector('.galery')) {
    const lightbox = GLightbox({
        selector: '.galery .wrapper a',
        touchNavigation: true,
        loop: true
    });
}

//gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 2, 
    effects: true
});

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-100% bottom',
      end: 'bottom top',
      scrub: true
    },
    defaults: {ease: 'none'}
  })

  .to('.footer-title', {
    right: '31%'
  })

const projects = document.querySelectorAll('.projects .project-item');
projects.forEach((project) => {
    const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects',
          start: 'top bottom',
          end: '20% top',
          scrub: true
        },
    })
    
    tl2.to(project, {
        scale: 1
    })
});

tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.overview',
      end: '20% top',
      scrub: 1.2,
    },
    duration: 0.3
})
tl3.to(".overview-item-image", { 
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    height: "100%",
    ease: "power1.out"
 });