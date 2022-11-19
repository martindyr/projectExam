// ==== LOAD MORE DINNERS ===

// API get request link
const url = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts?per_page=100"

// Button to load more dinners
const loadDinnersBtn = document.querySelector("#loadDinnersBtn")
// Button to load more desserts
const loadDessertsBtn = document.querySelector("#loadDessertsBtn")

//Fetching API from Wordpress
async function getAllPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const allPosts = data
        console.log(allPosts)

        generateCarousel(allPosts)
        popularPosts(allPosts)


    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

getAllPosts()


// CAROUSEL
const carousel = document.querySelector(".carouselTrackContainer")

function generateCarousel(allPosts) {
    carousel.innerHTML = `
    <div class="carouselTrack">
        <div class="carouselSlide currentSlide">
            <div class="carouselSlideGroup">
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[1].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[1].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[1].id}">View recepie</a>
                        <div>
                            <p>30 min</p>
                            <p>${allPosts[1].slug.charAt().toUpperCase() + allPosts[1].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[2].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[2].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[2].id}">View recepie</a>
                        <div>
                            <p>40 min</p>
                            <p>${allPosts[2].slug.charAt().toUpperCase() + allPosts[2].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[13].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[13].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[13].id}">View recepie</a>
                        <div>
                            <p>15 min</p>
                            <p>${allPosts[13].slug.charAt().toUpperCase() + allPosts[13].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="carouselSlide">
            <div class="carouselSlideGroup">
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[4].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[4].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[4].id}">View recepie</a>
                        <div>
                            <p>35 min</p>
                            <p>${allPosts[4].slug.charAt().toUpperCase() + allPosts[4].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[14].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[14].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[14].id}">View recepie</a>
                        <div>
                            <p>10 min</p>
                            <p>${allPosts[14].slug.charAt().toUpperCase() + allPosts[14].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[6].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[6].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[6].id}">View recepie</a>
                        <div>
                            <p>30 min</p>
                            <p>${allPosts[6].slug.charAt().toUpperCase() + allPosts[6].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="carouselSlide">
            <div class="carouselSlideGroup">
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[7].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[7].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[7].id}">View recepie</a>
                        <div>
                            <p>25 min</p>
                            <p>${allPosts[7].slug.charAt().toUpperCase() + allPosts[7].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[15].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[15].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[15].id}">View recepie</a>
                        <div>
                            <p>20min</p>
                            <p>${allPosts[15].slug.charAt().toUpperCase() + allPosts[15].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
                <div class="carouselCard">
                    <div class="carouselImgContainer">
                        <img onclick="zoom(this)" class="carouselImg" src="${allPosts[9].jetpack_featured_media_url}" alt="">
                        <p class="carouselImgName">${allPosts[9].title.rendered}</p>
                    </div>
                    <div class="carouselText">
                        <a href="postDetails.html?id=${allPosts[9].id}">View recepie</a>
                        <div>
                            <p>10 min</p>
                            <p>${allPosts[9].slug.charAt().toUpperCase() + allPosts[9].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    // Select html used to interact with carousel
    const prevBtn = document.querySelector(".carouselButtonLeft")
    const prevBtnImg = document.querySelector(".carouselButtonImgLeft")
    const nextBtn = document.querySelector(".carouselButtonRight")
    const nextBtnImg = document.querySelector(".carouselButtonImgRight")
    const track = document.querySelector(".carouselTrack")
    const slides = Array.from(track.children)
    const slideWidth = slides[0].getBoundingClientRect().width
    let slideIndex = 1

    // When carousel is loaded - disable prev-button
    prevBtn.style.opacity = 0.3
    prevBtn.style.cursor = 'default'
    prevBtnImg.style.opacity = 0.3


    slides[0].style.left = slideWidth * 0 + 'px'
    slides[1].style.left = slideWidth * 1 + 'px'
    slides[2].style.left = slideWidth * 2 + 'px'

    // Next slide
    nextBtn.addEventListener('click', e => {
        const currentSlide = track.querySelector(".currentSlide");
        const nextSlide = currentSlide.nextElementSibling;
        const amountToMove = nextSlide.style.left;

        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('currentSlide')
        nextSlide.classList.add('currentSlide')

        prevBtn.style.opacity = 1
        prevBtnImg.style.opacity = 1
        prevBtnImg.style.cursor = 'pointer'

        // Disable next-button at last slide
        if (slideIndex === 3) {
            return
        } else {
            slideIndex++
            console.log("This is slide number: " + slideIndex)
        }

        if (slideIndex === 3) {
            nextBtn.style.opacity = 0.3
            nextBtnImg.style.opacity = 0.3
            nextBtnImg.style.cursor = 'default'
        }
    })
    // Previous slide
    prevBtn.addEventListener('click', e => {
        const currentSlide = track.querySelector(".currentSlide");
        const prevSlide = currentSlide.previousElementSibling;
        const amountToMove = prevSlide.style.left;

        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('currentSlide')
        prevSlide.classList.add('currentSlide')

        nextBtn.style.opacity = 1
        nextBtnImg.style.opacity = 1
        nextBtnImg.style.cursor = 'pointer'


        // Disable Prev-button at first slide
        if (slideIndex === 1) {
            return
        } else {
            slideIndex--
            console.log("This is slide number: " + slideIndex)
        }

        if (slideIndex === 1) {
            prevBtn.style.opacity = 0.3
            prevBtnImg.style.opacity = 0.3
            prevBtnImg.style.cursor = 'default'
        }
    })
}
const popularContainer = document.querySelector(".popularContainer")

function popularPosts(allPosts) {

    // Clearing loader
    popularContainer.innerHTML = ``

    for (let i = 5; i < 8; i++) {
        popularContainer.innerHTML +=
                `
            <div class="carouselCard">
                <div class="carouselImgContainer">
                    <img onclick="zoom(this)" class="postListImg" src="${allPosts[i].jetpack_featured_media_url}" alt="">
                    <p class="carouselImgName">${allPosts[i].title.rendered}</p>
                </div>
                <div class="carouselText">
                    <a href="postDetails.html?id=${allPosts[i].id}">View recepie</a>
                    <div>
                        ${allPosts[i].excerpt.rendered}
                        <p>${allPosts[i].slug.charAt().toUpperCase() + allPosts[i].slug.replace(/-/g, '').replace(/[0-9]/, '').slice(1)}</p>
                    </div>
                </div>
            </div>
            `
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
    const posts = document.querySelector(".carousel")
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
    const posts = document.querySelector(".carousel")
    posts.style.display = ""
}