var navShown = false;
const nav = document.getElementById("nav");
const trueNav = document.getElementById("otherContent");
const content = document.getElementById("content");
function moveNav() {
    switch(navShown) {
        case false:
            console.log("Showing");
            nav.classList.remove("close");
            nav.classList.add("open");
            content.classList.remove("closed");
            content.classList.add("open");
            trueNav.classList.add("shown");
            trueNav.classList.remove("hidden");
            break;
        case true:
            console.log("Hiding");
            nav.classList.add("close");
            nav.classList.remove("open");
            content.classList.add("closed");
            content.classList.remove("open");
            trueNav.classList.add("hidden");
            trueNav.classList.remove("shown");
            break;
    }
    navShown = !navShown;
}