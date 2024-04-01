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
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "2.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vh";
        this.document.querySelector("#srvcs a").style.transition = "all 1.1s";
        document.querySelector("#srvcs a").style.padding = "0.5vw 0.25vw";    
    }
    else{
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "1.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vw";
        this.document.querySelector("#srvcs a").style.transition = "all 1.1s";
        document.querySelector("#srvcs a").style.padding = "0.5vw 0.25vw";
    }
});

window.addEventListener("scroll", function resetSize(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if(scrollTop===0){
        if(mediaQry.matches){
            this.document.querySelector(".left #logo").style.transition = "all 1.1s";
            document.querySelector(".left #logo").style.height = "5vh";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vh";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "5vw";
            this.document.querySelector("#srvcs a").style.transition = "all 1.1s";
            document.querySelector("#srvcs a").style.padding = "1vw 0.5vw";
        }
        else{
            this.document.querySelector(".left #logo").style.transition = "all 1.1s";
            document.querySelector(".left #logo").style.height = "5vw";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vw";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "3vw";
            this.document.querySelector("#srvcs a").style.transition = "all 1.1s";
            document.querySelector("#srvcs a").style.padding = "1vw 0.5vw";
        }
    }
});

window.onload = function(){
    if(mediaQry.matches){
        var replace1 = document.getElementById("photo");
        replace1.remove();
        var replace2 = document.getElementById("support");
        replace2.remove();
        var row3 = document.createElement("div");
        row3.setAttribute("class", "row3");
        row3.style.display = "flex";
        document.querySelector("main .lowerSection .box").appendChild(row3);
        var box5 = document.createElement("div");
        document.querySelector(".row3").appendChild(box5);
        box5.setAttribute("class", "col");
        box5.setAttribute("title", "Photography");
        box5.setAttribute("id", "photo");
        box5.style.width = "37.2vw";
        box5.style.height = "50vw";
        box5.style.alignItems = "center";
        box5.style.backgroundColor = "burlywood";
        box5.style.justifyContent = "center";
        box5.style.textAlign = "center";
        var img = document.createElement("img");
        img.src = "./imgs/photography.png";
        img.alt = "photography";
        img.style.width = "5vw";
        img.style.padding = "5vw 0";
        box5.appendChild(img);
        var br = document.createElement("br");
        box5.appendChild(br);
        box5.appendChild(br);
        var p = document.createElement("p");
        p.innerHTML = "Photography plays a crucial role in web development by enhancing the visual appeal,engagement, and storytelling capabilities of websites and web applications.";
        p.setAttribute("id", "p5");
        p.style.fontFamily = "Calibri";
        p.style.fontSize = "3vw";
        p.style.flexWrap = "wrap";
        p.style.flexWrap = "break-word";
        p.style.wordBreak = "keep-all";
        p.style.color = "#000";
        box5.appendChild(p);

        box5.addEventListener("mouseover", () => {
            box5.style.backgroundColor = "rgb(29, 5, 29)";
            document.getElementById("p5").style.color = "white";
        });

        box5.addEventListener("mouseout", () => {
            box5.style.backgroundColor = "burlywood";
            document.getElementById("p5").style.color = "black";
        });

        var box6 = document.createElement("div");
        document.querySelector(".row3").appendChild(box6);
        box6.setAttribute("class", "col");
        box6.setAttribute("title", "Tech Support");
        box6.setAttribute("id", "support");
        box6.style.width = "37.2vw";
        box6.style.height = "50vw";
        box6.style.alignItems = "center";
        box6.style.backgroundColor = "burlywood";
        box6.style.justifyContent = "center";
        box6.style.textAlign = "center";
        var img = document.createElement("img");
        img.src = "./imgs/tech-support.png";
        img.alt = "tech-support";
        img.style.width = "5vw";
        img.style.padding = "5vw 0";
        box6.appendChild(img);
        var br = document.createElement("br");
        box6.appendChild(br);
        box6.appendChild(br);
        var p = document.createElement("p");
        p.innerHTML = "Tech support plays a crucial role in ensuring that websites and web applications function smoothly, remain accessible, and address user issues effectively.";
        p.setAttribute("id", "p6");
        p.style.fontFamily = "Calibri";
        p.style.fontSize = "3vw";
        p.style.flexWrap = "wrap";
        p.style.flexWrap = "break-word";
        p.style.wordBreak = "keep-all";
        p.style.color = "#000";
        box6.appendChild(p);

        box6.addEventListener("mouseover", () => {
            box6.style.backgroundColor = "rgb(29, 5, 29)";
            document.getElementById("p6").style.color = "white";
        });

        box6.addEventListener("mouseout", () => {
            box6.style.backgroundColor = "burlywood";
            document.getElementById("p6").style.color = "black";
        });
    }    
};