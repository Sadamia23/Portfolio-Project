$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false, 
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 2, 
        responsiveClass: true,
        responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 1
            },
            992: {
                items: 2 
            }
        }
    });

    $('.owl-prev').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.owl-next').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
});


window.addEventListener('scroll', () => {
    const elementToReveal = document.getElementById('elementToReveal');
    if (window.scrollY > 400) {
        elementToReveal.style.opacity = '1';

    } else {
        elementToReveal.style.opacity = '0';
    }
});

window.addEventListener('scroll', () => {
    const elementToReveal1 = document.getElementById('elementToReveal1');
    if (window.scrollY > 400) {
        elementToReveal1.style.top = '0px';

    } else {
        elementToReveal1.style.top = '-76px';
    }
})




const x = document.getElementById('menu-a');
const y = document.getElementById('menu-ul');
let isVisible = false;

x.addEventListener('click', () => {
  if (isVisible) {
    y.style.top = '-420px'
  } else {
    y.style.top = '69px'
  }
  isVisible = !isVisible; 

});





const z = document.getElementById('blog+')
const e = document.getElementById('element')
let visible = false

z.addEventListener('click', () =>{ 
    if(visible){
        e.style.display = 'none'
    } else {
        e.style.display = 'block'
    }
    visible = !visible
})