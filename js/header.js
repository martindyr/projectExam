// Creating a component for the header
// If changes ocour, i can edit everything in one place

// Target header
const header = document.querySelector("header")

// Generating HTML
header.innerHTML = `
<nav>
    <div>
    <!-- Logo -->
    </div>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
`

