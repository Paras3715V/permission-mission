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

/* show name on certificate */

if(document.getElementById("personName")){

let name=localStorage.getItem("missionName")

document.getElementById("personName").innerText=name

launchConfetti()

}

/* moving deny button */

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

/* confetti */

function launchConfetti(){

let canvas=document.getElementById("confetti")
if(!canvas) return

let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let pieces=[]

for(let i=0;i<120;i++){

pieces.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*6+2,
speed:Math.random()*3+1

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#2ecc71"

pieces.forEach(p=>{

ctx.fillRect(p.x,p.y,p.size,p.size)

p.y+=p.speed

if(p.y>canvas.height)p.y=0

})

requestAnimationFrame(draw)

}

draw()

}

/* download certificate */

function downloadCertificate(){

html2canvas(document.getElementById("certificate")).then(canvas=>{

let link=document.createElement("a")

link.download="mission-certificate.png"

link.href=canvas.toDataURL()

link.click()

})

}