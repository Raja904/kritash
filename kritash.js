var prevScrollpos = window.scrollY;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var navbar = document.querySelector(".navbar"); // Select the navbar using its class

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0"; // Show navbar when scrolling up
    } else {
        navbar.style.top = "-100px"; // Hide navbar when scrolling down
    }

    prevScrollpos = currentScrollPos;
};
