const mediaQry = window.matchMedia('(max-width: 500px)');
const menubar = document.querySelector("#menu");
const closebar = document.querySelector("#x");

if (mediaQry.matches) {
    menubar.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
    });
    closebar.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    });
}

window.addEventListener("scroll", function reduceSize() {
    if (mediaQry.matches) {
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vh";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vh";
    }
    else {
        this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
        document.querySelector("nav .left #logo").style.height = "2.5vw";
        this.document.querySelector("nav").style.transition = "all 1.1s";
        document.querySelector("nav").style.height = "5vw";
        this.document.querySelector("#cntct a").style.transition = "all 1.1s";
        document.querySelector("#cntct a").style.padding = "0.5vw 0.25vw";
    }
});

window.addEventListener("scroll", function resetSize() {
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if (scrollTop === 0) {
        if (mediaQry.matches) {
            this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
            document.querySelector("nav .left #logo").style.height = "5vh";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vh";
        }
        else {
            this.document.querySelector("nav .left #logo").style.transition = "all 1.1s";
            document.querySelector("nav .left #logo").style.height = "5vw";
            this.document.querySelector("nav").style.transition = "all 1.1s";
            document.querySelector("nav").style.height = "7vw";
            this.document.querySelector("#cntct a").style.transition = "all 1.1s";
            document.querySelector("#cntct a").style.padding = "1vw 0.5vw";
        }
    }
});

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length === 0) {
        nameError.innerHTML = "Name is mandatory";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name&nbsp<img src='./icons/wrong.png'>";
        return false;
    }
    nameError.innerHTML = '<img src="./icons/right.png">';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-nmbr').value;
    if (phone.length === 0) {
        phoneError.innerHTML = "Contact required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Contact length 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Invalid contact&nbsp<img src='./icons/wrong.png'>";
        return false;
    }
    phoneError.innerHTML = "<img src='./icons/right.png'>";
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length === 0) {
        emailError.innerHTML = "Email required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email&nbsp<img src='./icons/wrong.png'>";
        return false;
    }
    emailError.innerHTML = "<img src='./icons/right.png'>";
    return true;
}

function validateMsg() {
    var msg = document.getElementById("contact-msg").value;
    var required = 30;
    var left = required - msg.length;

    if (msg.length === 0) {
        msgError.innerHTML = "Message is required";
        return false;
    }
    if (left > 0) {
        msgError.innerHTML = left + "more characters required&nbsp<img src='./icons/wrong.png'>";
        return false;
    }
    msgError.innerHTML = "<img src='./icons/right.png'>";
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the errors";
        setTimeout(function () {
            submitError.style.display = 'none'
        }, 3000);
        document.querySelector(".telegram").style.background = "rgba(255, 0, 0, 1)";
        document.getElementsByTagName("button")[0].style.borderColor = "rgba(255, 0, 0, 1)";
        setInterval(() => {
            document.querySelector(".telegram").style.background = "rgba(255, 255, 255, 1)";
            document.getElementsByTagName("button")[0].style.borderColor = "rgba(255, 255, 255, 0.7)";
        }, 3000);
        return false;
    }
    else if (validateName() && validatePhone() && validateEmail() && validateMsg()) {
        document.querySelector(".telegram").style.background = "rgba(0, 255, 0, 1)";
        document.getElementsByTagName("button")[0].style.borderColor = "rgba(0, 255, 0, 1)";
        setInterval(() => {
            document.querySelector(".telegram").style.background = "rgba(255, 255, 255, 1)";
            document.getElementsByTagName("button")[0].style.borderColor = "rgba(255, 255, 255, 0.7)";
            var inputs = document.getElementById("myForm").getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
            var msgInput = document.getElementById("myForm").getElementsByTagName("textarea")[0];
            msgInput.value = "";
        }, 2000);
    }
}