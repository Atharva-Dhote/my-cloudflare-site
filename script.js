/* ===========================
   TYPING ANIMATION
=========================== */

const words = [
    "Cloud Engineer ☁️",
    "DevOps Learner 🚀",
    "Automation Builder ⚙️",
    "Anime Enthusiast 🎌",
    "UI/UX Designer 🎨"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/* ===========================
   CURSOR GLOW
=========================== */

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



/* ===========================
   PARTICLES
=========================== */

const particleContainer = document.getElementById("particles");

for(let i=0;i<60;i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random()*100 + "vw";

    particle.style.animationDuration = (8 + Math.random()*10) + "s";

    particle.style.animationDelay = Math.random()*10 + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}



/* ===========================
   SAKURA PETALS
=========================== */

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration = (6+Math.random()*6)+"s";

    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,400);



/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.display="none";

    },2000);

});



/* ===========================
   NAVBAR SHADOW
=========================== */

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.boxShadow="0 15px 45px rgba(0,0,0,.5)";

    }

    else{

        nav.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

    }

});



/* ===========================
   SKILL CARD TILT
=========================== */

document.querySelectorAll(".skill-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/10);

const rotateX=((rect.height/2-y)/10);

card.style.transform=

`perspective(800px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.08)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});



/* ===========================
   PROJECT CARD ANIMATION
=========================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



/* ===========================
   BUTTON CLICK EFFECT
=========================== */

document.querySelectorAll("button,a").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(.92)"},

{transform:"scale(1)"}

],{

duration:250

});

});

});



/* ===========================
   SECTION FADE
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});
