const navlinks = document.querySelectorAll('.navlink')
const menu = document.querySelector('#menu')
const navbar = document.querySelector('.navbar')
const questions = document.querySelectorAll('.accordion-q')


/* active link */
navlinks.forEach(link=>{
    link.addEventListener('click', function(){
        navlinks.forEach(l=>l.classList.remove('active'))
        this.classList.add('active')
        navbar.classList.toggle('active')
    })
})

/*hamburger menu */
menu.addEventListener('click', function(){
    navbar.classList.toggle('active')
})

/* cursos dropdown */
questions.forEach(q=>{
    q.addEventListener('click', function(){
        q.nextElementSibling.classList.toggle('active')
        q.querySelector(':nth-child(2)').classList.toggle('bi-caret-up-fill')
    })
})

/* splide image carousel */
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );


/* google map */
function initMap() {
    const myLatLng = { lat: 19.118618, lng:-98.169457 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Centro de Idiomas Ikigai",
    });
  }
  
  window.initMap = initMap;

  /* ------Formulario------- */
