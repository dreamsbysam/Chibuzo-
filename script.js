const hamburger  = document.getElementById("hamburger");
const nav = document.querySelector(".navbar nav");

hamburger.addEventListener("click", function() {

    nav.classList.toggle("active");

});

document.addEventListener("click", function(event) {
    if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove("active");
    }
});
