
// menu toggle ======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// scroll sections ===============================
let sections = document.querySelectorAll('div');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top <offset + height){
      // active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active sections for animation on scroll ===================================
      sec.classList.add('show-animate');
    }
    // if want to use animation that repeats on scroll, use this =====
    else{
      sec.classList.remove('show-animate');
     }
  });

  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation for footer on scroll
  let footer = document.querySelector('.footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
}

// gallery section

const pictures = [
  {
    image: "../photos/about.jpg"
  },
  {
    image: "../photos/about2.jpg"
  },
  {
    image: "../photos/about3.jpg"
  },
  {
    image: "../photos/about4.jpg"
  },
  {
    image: "../photos/about5.jpg"
  },
  {
    image: "../photos/about6.jpg"
  },
  {
    image: "../photos/about7.jpg"
  },
  {
    image: "../photos/about8.jpg"
  },
  {
    image: "../photos/about9.jpg"
  },
  {
    image: "../photos/about10.jpg"
  }
]


let pictureHtml = '';

pictures.forEach((picture) => {
  pictureHtml += `
       
          <img src="${picture.image}" alt="#">
       
  `
});

document.querySelector('.js-picture').innerHTML = pictureHtml;


