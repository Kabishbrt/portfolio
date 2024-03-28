function menufunction(){
    var menuBtn = document.getElementById('myNavMenu');
    var navbtn = document.getElementById('navbtnicon');
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
        navbtn.className = "uil uil-times";
        
    }else{
        menuBtn.className = "nav-menu";
        navbtn.className = "uil uil-bars";
    }
}


const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Student", "Designer","Guitarist"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80, 
    backDelay: 2000,
})



const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,
});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".hello", { delay: 100 });
sr.reveal(".text-info", { delay: 100 });
sr.reveal(".text-btn", { delay: 100 });
sr.reveal(".text-info", { delay: 100 });
sr.reveal(".text-info", { delay: 100 });

sr.reveal(".image", { delay: 100 });

sr.reveal("#Projects", { delay: 100 });
sr.reveal("project-box", { interval: 100 });
sr.reveal("h1", { delay: 100 });
sr.reveal("span", { delay: 100 });

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: false,
}) 

srLeft.reveal(".col", { delay: 100 });

srLeft.reveal(".contact-info", { delay: 100 });



const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: false,
}) 

srRight.reveal(".skill", { delay: 200 });
srRight.reveal("#formf", { delay: 200 });



const sections = document.querySelectorAll(".section[id]");

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link');
        }
    });
});