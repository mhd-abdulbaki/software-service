const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {

    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
    } else {
    slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
    } else {
    slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// State Section

let stateSection = document.getElementById("stats");
let numbers = document.querySelectorAll(".box .number");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= stateSection.offsetTop - 400) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
})

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 10);
}

// Skills

let ourSkills = document.getElementById("our-skills");
let progresses = document.querySelectorAll(".progress span");

window.addEventListener('scroll',function () {

  if (window.scrollY >= ourSkills.offsetTop - 200) {
    progresses.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
})

// burger-menu

let burgerMenu = document.getElementById("burger-menu");
let mainNav = document.querySelector("nav ul");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});

//Image Filter

let switcherList = document.querySelectorAll('.shuffle li');
let images = Array.from(document.querySelectorAll('.all'));

switcherList.forEach(li=>{
    li.addEventListener("click",removeActive);
    li.addEventListener("click",handlingImages);
})

function removeActive(){
    switcherList.forEach(li=>{
        li.classList.remove('active');
        this.classList.add('active');
    })
}
function handlingImages(){
    images.forEach(img=>{
        img.style = ` 
        display: none;
        `;
    })
    document.querySelectorAll(this.dataset.cat).forEach(element=>{
        element.style = ` 
        display: block;
        `;
        element.classList.add('.is-animated');
    })
}

// Up button

let upBtn = document.getElementById('up')

window.addEventListener("scroll",function(){
    if(window.scrollY >= 1000){
        upBtn.style.display="block";
    }else{
        upBtn.style="display:none";
    }
})

upBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
})