// ==== LOAD MORE DINNERS ===

// API get request link
const url = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts"

// Button to load more dinners
const loadBtn = document.querySelector("#loadBtn")

// Element to display more dinner options
const dinnerContainer = document.querySelector("#dinner")

// A place to store only dinners
const dinnerObject = []

//Fetching API from Wordpress
async function getAllPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const allPosts = data
        console.log(allPosts)

        // Making a object with only dinners
        for (let i = 0; i < allPosts.length; i++) {
            if (allPosts[i].categories[0] === 20) {
                dinnerObject.push(allPosts[i])
            }
        }
        console.log(dinnerObject)
        loadDinners()
        generateCarousel(allPosts)

    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

// Show 3 dinners on page load
// Every time button is pressed - show 3 more dinners

loadBtn.addEventListener("click", loadDinners)

let posts = 0

function loadDinners() {

    for (let i = posts; i < posts + 3; i++) {
        dinnerContainer.innerHTML +=
            `
            <div>
                <a href="postDetails.html?id=${dinnerObject[i].id}">navigate</a>
                <p>Food name: ${dinnerObject[i].title.rendered}</p>
                <img src="${dinnerObject[i].jetpack_featured_media_url}"></img>
            </div>
            `
    }
    posts += 3
    console.log(dinnerContainer)
}
getAllPosts()

/* 
const shadowContainer = document.querySelector("#shadowContainer")

function zoom() {
    shadowContainer.style.display = "block"

}

function removeZoom() {
    shadowContainer.style.display = "none"
} */

// CAROUSEL
// Select html used to interact with carousel
const previousSlide = document.querySelector("#prevSlide")
const nextSlide = document.querySelector("#nextSlide")
const carousel = document.querySelector(".carouselTrackContainer")

function generateCarousel(allPosts) {
    carousel.innerHTML += `
    <div id="carouselTrack" class="carouselTrack">

        <div id="carouselSlide1" class="carouselSlide">
            <div class="carouselSlideGroup">
                <div>
                    <img class="carouselImg" src="${allPosts[1].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[2].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[3].jetpack_featured_media_url}" alt="">
                </div>
            </div>
        </div>

        <div id="carouselSlide2" class="carouselSlide">
            <div class="carouselSlideGroup">
                <div>
                    <img class="carouselImg" src="${allPosts[4].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[5].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[6].jetpack_featured_media_url}" alt="">
                </div>
            </div>
        </div>

        <div id="carouselSlide3" class="carouselSlide">
            <div class="carouselSlideGroup">
                <div>
                    <img class="carouselImg" src="${allPosts[7].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[8].jetpack_featured_media_url}" alt="">
                </div>
                <div>
                    <img class="carouselImg" src="${allPosts[9].jetpack_featured_media_url}" alt="">
                </div>
            </div>
        </div>

    </div>
    `
}






