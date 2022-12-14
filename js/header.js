// Creating a component for the header
// If changes ocour, i can edit everything in one place
console.log()


var numberArray = [
    50, 21, 19, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98,
];

var randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];

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
            <li><a href="postDetails.html?id=${randomNumber}">Suprise me</a></li>
        </ul>
    </div>

    <div id="phoneMenuContainer">
            <a href="index.html">
                <img src="/images/home.png" alt=""></img>
                <p>Home</p>
            </a>
            <a href="postList.html">
                <img src="/images/browse.png" alt=""></img>
                <p>Browse</p>
            </a>
            <a href="about.html">
                <img src="/images/about.png" alt=""></img>
                <p>About</p>
            </a>
            <a href="contact.html">
                <img src="/images/contact.png" alt=""></img>
                <p>Contact</p>
            </a>
            <a href="postDetails.html?id=${randomNumber}">
                <img src="/images/suprise.png" alt=""></img>
                <p>Suprise</p>
            </a>
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
        aboutBtn.style.fontSize = "21px";
    }
    if (window.location.pathname.endsWith("index.html")) {
        homeBtn.style.opacity = "1";
        homeBtn.style.fontSize = "21px";
    }
    if (window.location.pathname.endsWith("contact.html")) {
        contactBtn.style.opacity = "1";
        contactBtn.style.fontSize = "21px";
    }
    if (window.location.pathname.endsWith("postList.html")) {
        browseRecepiesBtn.style.opacity = "1";
        browseRecepiesBtn.style.fontSize = "21px";
    }
    if (window.location.pathname.endsWith("postDetails.html")) {
        browseRecepiesBtn.style.opacity = "1";
        browseRecepiesBtn.style.fontSize = "21px";
    }
}



// Run the function when the page loads
window.onload = currentHeader()






