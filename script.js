function startMission(){

window.location.href="mission.html"

}

function approveMission(){

let name=document.getElementById("nameInput").value

if(name===""){

alert("Please enter your name")

return

}

localStorage.setItem("missionName",name)

window.location.href="certificate.html"

}

if(document.getElementById("personName")){

let name=localStorage.getItem("missionName")

document.getElementById("personName").innerText=name

}

let deny=document.getElementById("deny")

if(deny){

deny.addEventListener("mouseover",move)

deny.addEventListener("touchstart",move)

}

function move(){

let x=Math.random()*250

let y=Math.random()*300

deny.style.position="absolute"

deny.style.left=x+"px"

deny.style.top=y+"px"

}