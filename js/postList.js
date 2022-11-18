// API get request link
const url = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts?per_page=100"

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
        createAppetizers(posts)
        loadDinners()
        loadDesserts()

    } catch {
        console.log(error)
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

// Generating Appetizers from Wordpress API
function createAppetizers(posts) {
    // Clearing loader
    appetizerContainer.innerHTML = ``

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].categories[0] === 19) {
            appetizerContainer.innerHTML +=
                `
            <div class="carouselCard">
                <div class="carouselImgContainer">
                    <img onclick="zoom(this)" class="postListImg" src="${posts[i].jetpack_featured_media_url}" alt="">
                    <p class="carouselImgName">${posts[i].title.rendered}</p>
                </div>
                <div class="carouselText">
                    <a href="postDetails.html?id=${posts[i].id}">View recepie</a>
                    <div>
                        ${posts[i].excerpt.rendered}
                        <p>${posts[i].slug.charAt().toUpperCase() + posts[i].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                    </div>
                </div>
            </div>
            `
        }
    }
}

// Show 3 dinners on page load
// Every time button is pressed - show 3 more dinners

loadDinnersBtn.addEventListener("click", loadDinners)

let dinners = 0
let loadingDinners = 0

function loadDinners() {
    if (loadingDinners === 0) {
        dinnerContainer.innerHTML = ``
        loadingDinners++
    }

    if (dinnerContainer.getElementsByTagName("div").length === 40) {
        return
    }

    if (loadingDinners >= 0) {
        for (let i = dinners; i < dinners + 3; i++) {
            if (dinnerObject[i] >= 10) {
                return
            } else {
                dinnerContainer.innerHTML +=
                    `
            <div class="carouselCard">
                <div class="carouselImgContainer">
                    <img onclick="zoom(this)" class="postListImg" src="${dinnerObject[i].jetpack_featured_media_url}" alt="">
                    <p class="carouselImgName">${dinnerObject[i].title.rendered}</p>
                </div>
                <div class="carouselText">
                    <a href="postDetails.html?id=${dinnerObject[i].id}">View recepie</a>
                    <div>
                        ${dinnerObject[i].excerpt.rendered}
                        <p>${dinnerObject[i].slug.charAt().toUpperCase() + dinnerObject[i].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                    </div>
                </div>
            </div>
            `
            }
        }
    }
    dinners += 3
}

// Show 3 desserts on page load
// Every time button is pressed - show 3 more dinners

loadDessertsBtn.addEventListener("click", loadDesserts)

let desserts = 0
let loadingDesserts = 0

function loadDesserts() {

    // On the first run, clear content and generate desserts
    if (loadingDesserts === 0) {
        dessertContainer.innerHTML = ``
        loadingDesserts++
    }
    if (dessertContainer.getElementsByTagName("div").length === 16) {
        return
    }

    if (loadingDesserts >= 0) {


        for (let i = desserts; i < desserts + 3; i++) {
            dessertContainer.innerHTML +=
                `
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="postListImg" src="${dessertObject[i].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${dessertObject[i].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${dessertObject[i].id}">View recepie</a>
                        <div>
                            ${dessertObject[i].excerpt.rendered}
                            <p>${dessertObject[i].slug.charAt().toUpperCase() + dessertObject[i].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                `
        }
    }

    desserts += 3



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
    posts.style.display = ""
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
