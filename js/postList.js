// API get request link
const url = "http://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts?per_page=100"

// Tagerget place to generate HTML
const dinnerContainer = document.querySelector(".dinnerContainer")
const appetizerContainer = document.querySelector(".appetizerContainer")
const dessertContainer = document.querySelector(".dessertContainer")

// A place to store only dinners
const dinnerObject = []

// A place to store only dinners
const dessertObject = []

// Categorie 20  = Dinner
// Categorie 18  = Dessert
// Categorie 19  = Appetizer

//Fetching API from Wordpress
async function getPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const posts = data
        console.log(posts)

        // Making a object with only dinners
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].categories[0] === 20) {
                dinnerObject.push(posts[i])
            }
        }

        // Making a object with only desserts
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].categories[0] === 18) {
                dessertObject.push(posts[i])
            }
        }
        console.log(dinnerObject)
        createHtml(posts)
        loadDinners()
        loadDesserts()
    } catch {
        console.log(error)
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

// Show 3 desserts on page load
// Every time button is pressed - show 3 more dinners

loadDessertsBtn.addEventListener("click", loadDesserts)

let desserts = 0

function loadDesserts() {

    for (let i = desserts; i < desserts + 3; i++) {
        dessertContainer.innerHTML +=
            `
            <div>
                <img onclick="zoom(this)" class="postListImg" src="${dessertObject[i].jetpack_featured_media_url}"></img>
            </div>
            `
    }

    desserts += 3

}

// Show 3 dinners on page load
// Every time button is pressed - show 3 more dinners

loadDinnersBtn.addEventListener("click", loadDinners)

let dinners = 0

function loadDinners() {

    for (let i = dinners; i < dinners + 3; i++) {
        if (dinnerObject[i] >= 10) {
            return
        } else {
            dinnerContainer.innerHTML +=
                `
            <div>
                <img onclick="zoom(this)" class="postListImg" src="${dinnerObject[i].jetpack_featured_media_url}"></img>
            </div>
            `
        }
    }
    dinners += 3
}

// Generating the posts from Wordpress API
function createHtml(posts) {
    for (let i = 0; i < posts.length; i++) {

        if (posts[i].categories[0] === 19) {
            appetizerContainer.innerHTML += `
        <div>
            <img onclick="zoom(this)" class="postListImg" src="${posts[i].jetpack_featured_media_url}" alt="">
        </div>
        `
        }
        /*         if (posts[i].categories[0] === 18) {
                    dessertContainer.innerHTML += `
                <div>
                    <img onclick="zoom(this)" class="postListImg" src="${posts[i].jetpack_featured_media_url}" alt="">
                </div>
                `
                } */
    }

}

function zoom(img) {
    // Start zooming
    const src = img.src;
    const zoomedContainer = document.querySelector(".zoomedContainer")
    zoomedContainer.innerHTML = `
        <div onclick="quitZoom()" class="zoomedImgBackground">
            <img class="zoomedImg" src="${src}" alt=""></img>
        </div>
        `
    // Remove scroll
    const body = document.querySelector("body")
    body.style.overflow = "hidden"
    // Hide posts
    const posts = document.querySelector(".postListContent")
    posts.style.display = "none"


}

function quitZoom() {
    // Quit zooming
    const zoomedContainer = document.querySelector(".zoomedContainer")
    zoomedContainer.innerHTML = ``
    // Enable scroll
    const body = document.querySelector("body")
    body.style.overflow = ""
    // Show posts
    const posts = document.querySelector(".postListContent")
    posts.style.display = ""


}

getPosts()
