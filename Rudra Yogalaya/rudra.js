let galleries = document.querySelectorAll(".card-gallery");

galleries.forEach(function(gallery) {
    setInterval(function() {
        // Calculate maximum scroll width limit
        let maxScroll = gallery.scrollWidth - gallery.clientWidth;

        // If we reach the end of the image slide loop, snap back to the first photo!
        if (gallery.scrollLeft >= maxScroll - 5) {
            gallery.scrollLeft = 0;
        } else {
            // Otherwise, slide smoothly forward by one exact card frame width
            gallery.scrollLeft = gallery.scrollLeft + gallery.clientWidth;
        }
    }, 2500); // Transitions automatically every 2.5 seconds
});
// 5. Grab our welcome curtain element
let curtain = document.getElementById("welcomeCurtain");

// 6. Set up a countdown timer (2000 milliseconds = 2 seconds)
setTimeout(function() {
    curtain.style.transform = "translateY(-100%)";
}, 2000);

// 1. Hooking up reference links to our physical page elements
let joinBtn = document.querySelector(".hero-btn");
let formBox = document.getElementById("admissionFormBox");
let closeX = document.getElementById("closeFormBtn");

joinBtn.addEventListener("click", function() {
    formBox.style.display = "flex";
});
 
closeX.addEventListener("click", function() {
    formBox.style.display = "none";

});





// Reference links for the teachers popup box
let teachersBtn = document.getElementById("teachersBtn");
let teachersBox = document.getElementById("teachersOverlay");
let closeTeachersX = document.getElementById("closeTeachersBtn");

teachersBtn.addEventListener("click", function() {

    teachersBox.style.display = "flex";
});
closeTeachersX.addEventListener("click", function() {

    teachersBox.style.display = "none";
});            

// Grab the "About" link out of your top header menu
let aboutLink = document.querySelector('nav a[href="#stats"]');

// When someone clicks "About" in the top menu, open the faculty popup!
aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Stops the page from roughly jumping downwards
    teachersBox.style.display = "flex";
});
