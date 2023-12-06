

// home music array ===================================================
const musics = [
  {
    image: "./photos/about4.jpg",
    playtime: "3:24",
    audio: "./audio/aud1.mp3"
  },
  {
    image: "./photos/img2.jpg",
    playtime: "3:09",
    audio: "./audio/aud2.mp3"
  },
  {
    image: "./photos/about8.jpg",
    playtime: "3:21",
    audio: "./audio/aud3.mp3"
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




// home slider ===============================================================================>
const slides = [
	{
		"image": "IMG_2485.jpg"
	},
	{
		"image": "home1.jpg"
	},
	{
		"image": "home2.jpg"
	},
	{
		"image": "home3.jpg"
	}
]


let dot_img = document.querySelector('.dots');
let banner = document.querySelector('#banner');
let previous = document.querySelector('#previous');
let nextbtn = document.querySelector('#next');

previous.addEventListener('click', left);
nextbtn.addEventListener('click', right);

let etape = 0;
let slidelength = slides.length;
let tabimages = [];
let Timage = document.querySelector('.banner-img');
let text = document.querySelector('.banner-p');
console.log(text);
tabimages = Object.values(slides);
console.log(tabimages);

for( let e = 0; e < slidelength; e++){
	let divs = document.createElement('div');
	divs.classList.add('dot');
	dot_img.appendChild(divs);
}

let dot = document.getElementsByClassName('dot');

function left(){
	dot[etape].classList.remove('dot_selected');
	// e.preventDefault();
	etape--;
	if(etape < 0){
		etape = slidelength - 1;
	}
	Timage.src = "./photos/" + tabimages[etape].image;
	text.innerHTML = tabimages[etape].tagLine;
	dot[etape].classList.add('dot_selected');
}

function right(){
  dot[etape].classList.remove('dot_selected');
	etape++;
	if( etape >= slidelength ){
       etape = 0;
	}
	Timage.src = "./photos/" + tabimages[etape].image;
	text.innerHTML = tabimages[etape].tagLine;
	dot[etape].classList.add('dot_selected');
}

setInterval(right, 4000);

// ==========================================================================================>



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



// page onload part =======================================================

// var myVar;
    
//     function myfunction() {
//       myVar = setTimeout(showPage, 2000);
//     }
    
//     function showPage() {
//       document.getElementById("welcome-page").style.display = "none";
//       document.getElementById("main-el").style.display = "block";
//     }

