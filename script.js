function startMission(){

window.location.href="mission.html"

}

function approveMission(){

window.location.href="certificate.html"

}

/* moving deny button */

let deny=document.getElementById("deny")

if(deny){

deny.addEventListener("touchstart",move)

deny.addEventListener("mouseover",move)

}

function move(){

let x=Math.random()*250

let y=Math.random()*300

deny.style.position="absolute"

deny.style.left=x+"px"

deny.style.top=y+"px"

}