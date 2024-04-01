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
        this.document.querySelector(".left #pic").style.transition = "all 1.1s";
        document.querySelector(".left #pic").style.height = "2.5vh";
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "2.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vh";
        this.document.querySelector("nav ul li a").style.transition = "all 1.1s";
        document.querySelector("nav ul li a").style.padding = "0.5vw 0.25vw";    
    }
    else{
        this.document.querySelector(".left #pic").style.transition = "all 1.1s";
        document.querySelector(".left #pic").style.height = "2.5vh";
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vh";
        this.document.querySelector(".left").style.transition = "all 1.1s";
        document.querySelector(".left").style.fontSize = "1.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vw";
        this.document.querySelector("#abt a").style.transition = "all 1.1s";
        document.querySelector("#abt a").style.padding = "0.5vh 0.25vw";
    }
});

window.addEventListener("scroll", function resetSize(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if(scrollTop===0){
        if(mediaQry.matches){
            this.document.querySelector(".left #pic").style.transition = "all 1.1s";
            document.querySelector(".left #pic").style.height = "5vh";
            this.document.querySelector(".left #logo").style.transition = "all 1.1s";
            document.querySelector(".left #logo").style.height = "5vh";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vh";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "5vw";
            this.document.querySelector("#abt a").style.transition = "all 1.1s";
            document.querySelector("#abt a").style.padding = "1vw 0.5vw";
        }
        else{
            this.document.querySelector(".left #pic").style.transition = "all 1.1s";
            document.querySelector(".left #pic").style.height = "5vw";
            this.document.querySelector(".left #logo").style.transition = "all 1.1s";
            document.querySelector(".left #logo").style.height = "5vw";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vw";
            this.document.querySelector(".left").style.transition = "all 1.1s";
            document.querySelector(".left").style.fontSize = "3vw";
            this.document.querySelector("#abt a").style.transition = "all 1.1s";
            document.querySelector("#abt a").style.padding = "1vw 0.5vw";
        }
    }
});

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || window.pageYOffset;
    
    if(((scrollTop / window.innerHeight) * 100) >= 17.62){
        document.querySelector("#pic").classList.add("sticky");
        document.querySelector("#pic").classList.remove("mypic");
    }
    else{
        document.querySelector("#pic").classList.remove("sticky");
        document.querySelector("#pic").classList.add("mypic");
    }
});

const themeBtn = document.getElementsByClassName("theme")[0];
themeBtn.addEventListener("click", () => {
    document.querySelector("nav").classList.add(".light");
    // document.querySelector("nav").style.backgroundColor="white";
});