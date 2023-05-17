const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    // Get scroll position in percentage
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Set width of progress bar based on scroll percentage
    progressBar.style.width = `${scrollPercentage}%`;

    // Check if scroll position is at the top of the page and hide/show progress bar container accordingly
    if (window.scrollY === 1) {
        progressBarContainer.style.display = "none";
    } else {
        progressBarContainer.style.display = "block";
    }
});