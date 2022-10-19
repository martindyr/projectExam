// Creating a component for the header
// If changes ocour, i can edit everything in one place

// Target header
const header = document.querySelector("header")

// Generating HTML
header.innerHTML = `
<nav>
    <div id="monitorMenu">
        <a href="index.html"><img src="/images/logo.svg"></img></a>
            <ul>
                <li><a id="home" href="index.html">Home</a></li>
                <li><a id="browseRecepies" href="postList.html">Browse recepies</a></li>
                <li><a id="about" href="about.html">About</a></li>
                <li><a id="contact" href="contact.html">Contact</a></li>
                <li><a href="">Suprise me</a></li>
            </ul>
    </div>
    <div id="phoneMenu">
        <div></div>
        <img src="/images/dinner.svg" alt=""></img>
        <div></div>
    </div>
</nav>
`

// Target NAV Buttons
const aboutBtn = document.querySelector("#about")
const browseRecepiesBtn = document.querySelector("#browseRecepies")
const homeBtn = document.querySelector("#home")
const contactBtn = document.querySelector("#contact")

// If pathname ends with ("X") apply the style to the nav button
function currentHeader() {
    if (window.location.pathname.endsWith("about.html")) {
        aboutBtn.style.opacity = "1";
        aboutBtn.style.fontSize = "18px";
    }
    if (window.location.pathname.endsWith("index.html")) {
        homeBtn.style.opacity = "1";
        homeBtn.style.fontSize = "18px";
    }
    if (window.location.pathname.endsWith("contact.html")) {
        contactBtn.style.opacity = "1";
        contactBtn.style.fontSize = "18px";
    }
    if (window.location.pathname.endsWith("postList.html")) {
        browseRecepiesBtn.style.opacity = "1";
        browseRecepiesBtn.style.fontSize = "18px";
    }
    if (window.location.pathname.endsWith("postDetails.html")) {
        browseRecepiesBtn.style.opacity = "1";
        browseRecepiesBtn.style.fontSize = "18px";
    }
}

// Run the function when the page loads
window.onload = currentHeader()






