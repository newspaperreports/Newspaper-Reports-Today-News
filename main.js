function openSearch() {
    document.getElementById('searchWorld').style.width = "100%";
};

function closeWorld() {
    document.getElementById('searchWorld').style.width = "0%";
};
// End Global Search Icon //

// Start NPR Host Nav List Open //
function openHostNavas(event) {
    event.stopPropagation(); // Prevent closing when clicking the icon
    let nav = document.getElementById("nprHostNavOpen");

    // Toggle Logic: যদি show থাকে, তাহলে hide করবে, না থাকলে show করবে
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block"; // Show the div
    } else {
        nav.style.display = "none"; // Hide the div
    }
}

// Hide when clicking outside
document.addEventListener("click", function(event) {
    let nav = document.getElementById("nprHostNavOpen");
    let icon = document.querySelector(".npr_host_nav_icon");

    // If clicked outside the menu and icon, hide it
    if (nav.style.display === "block" && !nav.contains(event.target) && !icon.contains(event.target)) {
        nav.style.display = "none";
    }
});
// End NPR Host Nav List Open //


// Responsive Mobile Script Area //
function openMbCgList() {
    document.getElementById('openMbSlideMenu').style.width = "320px";
    document.getElementById('openMbSlideMenu').style.height = "auto";
};

function closeMbCgList() {
    document.getElementById('openMbSlideMenu').style.width = "0px"
};

// Responsive Search Area //
function openMbSearchWorld() {
    document.getElementById('mb_searchWorld').style.width = "100%"
}

function closeMbSearchWorld() {
    document.getElementById('mb_searchWorld').style.width = "0%"
};


// End Responsive Mobile Script Area //
