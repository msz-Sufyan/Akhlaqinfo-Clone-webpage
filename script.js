document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".banner");
    const imageUrls = [
        "url(https://plus.unsplash.com/premium_photo-1687119905839-8b6f9ae2ca4b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    ];

    const contentLeft = document.querySelector(".content-left");
    const h4 = contentLeft.querySelector("h4");
    const h3 = contentLeft.querySelector("h3");
    
    let currentImageIndex = 0;

    function showImage(index) {
        banner.style.transition = "background-image 0.5s ease-in-out";
        banner.style.backgroundImage = imageUrls[index];

        if (index === 0) {
            h4.textContent = "End to End Application Service";
            h3.textContent = "Solutions & Preventions";
        } else if (index === 1) {
            h4.textContent = "End to End Application Service";
            h3.textContent = "Experience IT Solutions";
        }
    }

    function updateIndicators(index) {
        const indicators = document.querySelectorAll(".indicator");
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.style.backgroundColor = "red";
            } else {
                indicator.style.backgroundColor = "white";
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        showImage(currentImageIndex);
        updateIndicators(currentImageIndex);
    }

    showImage(currentImageIndex);
    updateIndicators(currentImageIndex);

    setInterval(nextImage, 30000);
});




// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to play the video when it scrolls into view
function playVideoWhenVisible() {
    var video = document.getElementById("myVideo");
    if (isInViewport(video)) {
        video.play();
        // Remove the event listener once the video starts playing
        window.removeEventListener("scroll", playVideoWhenVisible);
    }
}

// Function to toggle the visibility of upper-nav based on screen size
function toggleUpperNavVisibility() {
    const upperNav = document.getElementById("upper-nav");
    const lowerNav = document.getElementById("lower-nav");

    if (window.innerWidth <= 1024) {
        // Hide upper-nav and show lower-nav
        upperNav.style.display = "none";
        lowerNav.style.display = "";
    } else {
        upperNav.style.display = "";
    }
}

// Call the function when the page loads and when the window resizes
window.addEventListener("DOMContentLoaded", toggleUpperNavVisibility);
window.addEventListener("resize", toggleUpperNavVisibility);

