
const musics = [
  {
    image: "../photos/img1.jpg",
    playtime: "3:24",
    audio: "../audio/aud1.mp3"
  },
  {
    image: "../photos/img2.jpg",
    playtime: "3:09",
    audio: "../audio/aud2.mp3"
  },
  {
    image: "../photos/img3.jpg",
    playtime: "3:21",
    audio: "../audio/aud3.mp3"
  },
  {
    image: "../photos/img4.jpg",
    playtime: "3:21",
    audio: "../audio/aud4.mp3"
  },
  {
    image: "../photos/img5.jpg",
    playtime: "3:20",
    audio: "../audio/aud5.mp3"
  },
  {
    image: "../photos/home3.jpg",
    playtime: "5:16",
    audio: "../audio/aud6.mp3"
  },
  {
    image: "../photos/home2.jpg",
    playtime: "3:51",
    audio: "../audio/aud7.mp3"
  }
]

let musicHtml = '';

musics.forEach((music) => {
  musicHtml += `
  <div class="block">
     <img src="${music.image}" alt="#">
     <div class="playTime">${music.playtime}</div>
     <audio controls>
       <source src="${music.audio}">
     </audio>
  </div>
  `
});

document.querySelector('.js-music').innerHTML = musicHtml;




// menu toggle ======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// scroll sections ===============================
let sections = document.querySelectorAll('section');
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