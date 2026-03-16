function startMission(){

let name=document.getElementById("name").value;

localStorage.setItem("commander",name);

window.location="mission.html";

}

function approveMission(){

window.location="certificate.html";

}

window.onload=function(){

let commander=localStorage.getItem("commander");

let el=document.getElementById("commander");

if(el){

el.innerText=commander;

}

}

/* ESCAPING DENY BUTTON */

let no=document.getElementById("no");

if(no){

no.addEventListener("mouseover",function(){

let x=Math.random()*200-100;
let y=Math.random()*200-100;

no.style.transform=`translate(${x}px,${y}px)`;

});

}