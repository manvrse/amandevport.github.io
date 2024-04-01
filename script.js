const mediaQry = window.matchMedia('(max-width: 500px)');
const menubar = document.querySelector("#menu");
const closebar = document.querySelector("#x");
if(mediaQry.matches){
    menubar.addEventListener("click", ()=>{
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display="flex";
    });
    closebar.addEventListener("click", ()=>{
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display="none";
    });
}

window.addEventListener("scroll", function reduceSize(){
    if(mediaQry.matches){
        this.document.querySelector("nav .left .my-logo").style.transition = "all 1.1s";
        document.querySelector("nav .left .my-logo").style.height = "2.5vh";
        document.querySelector("nav .left .my-logo").style.width = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "2.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vh";
        this.document.querySelector(".items a").style.transition = "all 1.1s";
        document.querySelector(".items a").style.padding = "1.5vh  0.5vw";    
    }
    else{
        this.document.querySelector("nav .left .my-logo").style.transition = "all 1.1s";
        document.querySelector("nav .left .my-logo").style.height = "2.5vh";
        document.querySelector("nav .left .my-logo").style.width = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "1.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vw";
        this.document.querySelector(".items a").style.transition = "all 1.1s";
        document.querySelector(".items a").style.padding = "0.5vh  0.2vw";
    }
});

window.addEventListener("scroll", function resetSize(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if(scrollTop===0){
        if(mediaQry.matches){
            this.document.querySelector(".left .my-logo").style.transition = "all 1.1s";
            document.querySelector(".left .my-logo").style.height = "5vh";
            document.querySelector(".left .my-logo").style.width = "5vh";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vh";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "5vw";
            this.document.querySelector(".items a").style.transition = "all 1.1s";
            document.querySelector(".items a").style.padding = "1.5vh  0.5vw";
        }
        else{
            this.document.querySelector(".left .my-logo").style.transition = "all 1.1s";
            document.querySelector(".left .my-logo").style.height = "5vh";
            document.querySelector(".left .my-logo").style.width = "5vh";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vw";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "3vw";
            this.document.querySelector(".items a").style.transition = "all 1.1s";
            document.querySelector(".items a").style.padding = "1vw  0.5vw";
        }
    }
});

window.onload = function(){
    var typed = new Typed('#element', {
        strings: ['Full Stack Web Developer'],
        typeSpeed: 100,
    });
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const resume = document.getElementById("resume");
resume.title = "Download Resume";
const img1 = document.createElement("img");
img1.src = "./imgs/download.png";
img1.alt = "download";
img1.classList.add("btnImg1");
img1.style.width = "2vw";
img1.style.mixBlendMode = "multiply";
var anchor1 = document.createElement('a');
anchor1.textContent = "Download Resume";
const container1 = document.createElement("div");
container1.style.display = "flex";
container1.style.flexDirection = "row";
container1.style.alignItems = "center";
container1.style.justifyContent = "center";
container1.style.gap = "2vw";
container1.appendChild(anchor1);
container1.appendChild(img1);
resume.appendChild(container1);
resume.addEventListener("click", () => {
    window.open("./docs/MyResume.pdf");
});

const github = document.getElementById("github");
github.title = "Visit Github";
const img2 = document.createElement("img");
img2.src = "./imgs/github.jpg";
img2.alt = "github";
img2.classList.add("btnImg2");
img2.style.width = "2vw";
img2.style.mixBlendMode = "multiply";
var anchor2 = document.createElement('a');
anchor2.textContent = "Visit Github";
const container2 = document.createElement("div");
container2.style.display = "flex";
container2.style.flexDirection = "row";
container2.style.alignItems = "center";
container2.style.justifyContent = "center";
container2.style.gap = "2vw";
container2.appendChild(anchor2);
container2.appendChild(img2);
github.appendChild(container2);
github.addEventListener("click", () =>{
    anchor2.setAttribute("href", "https://github.com/manvrse");
});

const linkedin = document.getElementById("linkedin");
linkedin.title = "Visit Linkedin";
const img3 = document.createElement("img");
img3.src = "./imgs/linkedin.png";
img3.alt = "linkedin";
img3.classList.add("btnImg3");
img3.style.width = "2vw";
img3.style.mixBlendMode = "multiply";
var anchor3 = document.createElement('a');
anchor3.textContent = "Visit Linkedin";
const container3 = document.createElement("div");
container3.style.display = "flex";
container3.style.flexDirection = "row";
container3.style.alignItems = "center";
container3.style.justifyContent = "center";
container3.style.gap = "2vw";
container3.appendChild(anchor3);
container3.appendChild(img3);
linkedin.appendChild(container3);
linkedin.addEventListener("click", () =>{
    anchor3.setAttribute("href", "https://in.linkedin.com/in/aman-pandey-b7450248");
});

document.addEventListener ("DOMContentLoaded", () => {
    if(mediaQry.matches){
        document.querySelector(".btnImg1").style.width="4vw";
        document.querySelector(".btnImg2").style.width="4vw";
        document.querySelector(".btnImg3").style.width="4vw";
    }
});