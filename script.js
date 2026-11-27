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

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const videos = document.querySelectorAll(".preview-video");

videos.forEach(video => {

    video.addEventListener("mouseenter", function() {
            video.play();
    });

    video.addEventListener("mouseleave", function() {
        video.pause();
        video.currentTime = 0;
    });
});


/*const videos = document.querySelectorAll(".preview-video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play().catch(error => {
            console.log("Video playback failed", error);
        });
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});*/
