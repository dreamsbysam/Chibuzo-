const hamburger  = document.getElementById("hamburger");
const nav = document.querySelector(".navbar nav");

hamburger.addEventListener("click", function() {
    
    nav.classList.toggle("active");

});