for(let i=0;i<60;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=5+Math.random()*10+"s";

star.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(star);

}
