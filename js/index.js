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
const carousel = document.querySelector(".carouselTrackContainer")
function generateCarousel(allPosts) {
    carousel.innerHTML += `
    <div class="carouselTrack">
 
        <div class="carouselSlide currentSlide">
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

        <div class="carouselSlide">
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

        <div class="carouselSlide">
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
    // Select html used to interact with carousel
    const prevBtn = document.querySelector(".carouselButtonLeft")
    /* const prevBtnImg = document.querySelector(".carouselButtonImgLeft") */
    const nextBtn = document.querySelector(".carouselButtonRight")
    /* const nextBtnImg = document.querySelector(".carouselButtonImgRight") */
    const track = document.querySelector(".carouselTrack")
    const slides = Array.from(track.children)

    const slideWidth = slides[0].getBoundingClientRect().width

    prevBtn.style.opacity = 0.5


    slides[0].style.left = slideWidth * 0 + 'px'
    slides[1].style.left = slideWidth * 1 + 'px'
    slides[2].style.left = slideWidth * 2 + 'px'

    nextBtn.addEventListener('click', e => {
        const currentSlide = track.querySelector(".currentSlide");
        const nextSlide = currentSlide.nextElementSibling;
        const amountToMove = nextSlide.style.left;

        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('currentSlide')
        nextSlide.classList.add('currentSlide')
        prevBtn.style.opacity = 1
        if (nextSlide.style.left === 1680 + 'px') {
            console.log("This is the last slide")
            nextBtn.style.opacity = 0.3
        }

    })

    prevBtn.addEventListener('click', e => {
        const currentSlide = track.querySelector(".currentSlide");
        const prevSlide = currentSlide.previousElementSibling;
        const amountToMove = prevSlide.style.left;

        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('currentSlide')
        prevSlide.classList.add('currentSlide')
        nextBtn.style.opacity = 1
        if (prevSlide.style.left === slideWidth * 0 + 'px') {
            console.log("This is the first slide")
            prevBtn.style.opacity = 0.3
        }
    })
}










