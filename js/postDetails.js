// Place to display post details
const detailsContainer = document.querySelector(".postDetailsContainer")

// Get imgId from querystring
const queryString2 = document.location.search
const params2 = new URLSearchParams(queryString2)
const imgId = params2.get("imgId")

// Adding the ID to the imgURL
imgUrl = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/media/" + imgId

// Using the Dynamic URL to fetch data from spesific image
async function getPostImgInfo() {
    try {
        const response = await fetch(imgUrl)
        imgDetails = await response.json()
        console.log("Number 1")
    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}
// Store imgDetails 
let imgDetails = []


// Get id from querystring
const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

// Adding the ID to the URL
url = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts/" + id

// Using the Dynamic URL to fetch data from spesific post
async function getPost() {
    try {
        const response = await fetch(url)
        details = await response.json()
        console.log("Number 2")
    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}
// Store imgDetails 
let details = []

async function runFunctions(){
    await getPostImgInfo()
    await getPost()
    createHtml(imgDetails, details)
}
runFunctions()



// Creating the HTML from the spesific URL
function createHtml(imgDetails, details ) {
    console.log("Number 3")

    // Changning the document title to the post name
    document.title = details.title.rendered.replace(/&/g, '').replace(/#/g, '').replace(/[0-9]/g, '')

    detailsContainer.innerHTML = `
        <div class="sectionHeaderContainer">
            <div>
                <h2>${details.title.rendered}</h2>
            </div>
        </div>

        <div class="detailsHeader">
            <div class="detailsHeaderImg">
                <img onclick="zoom(this)" src="${details.jetpack_featured_media_url}" alt="Nicely displayed meal"></img>
            </div>
            <div>
                <h3>Ingredients</h3>
                <div id="ingredientList">
                    <p>400 g kj??ttdeig eller karbonadedeig</p>
                    <p>2 ss margarin eller olje til steking</p>
                    <p>1 stk. finhakket l??k</p>
                    <p>2 b??ter finhakket hvitl??k</p>
                    <p>1 stk. finhakket r??d chili</p>
                    <p>1 boks hermetiske tomater</p>
                    <p>1 boks chilib??nner</p>
                    <p>1 stk. r??d paprika i biter</p>
                    <p>1 stk. gr??nn paprika i biter</p>
                    <p>1,5 ts chilipulver</p>
                    <p>0,5 ts malt spisskummen</p>
                    <p>0,5 ts salt</p>
                </div>
            </div>
        </div>

        <div class="detailsMethod">
            <h3>Method</h3>
        </div>

        <div id="recepieDescription">
            <p>If this was not a dummy text, it would be a step-by-step on how to create the dish above. In WP this would be the content of the post. The content would be something like this:</p>

            <p>1 Fres finhakket l??k, hvitl??k, og chili, sammen med hakket r??d og gul paprika i en gryte p?? middels varme. Tilsett tomatpur?? og la det frese et par minutter.</p>

            <p>2 Tilsett spisskummen, paprikapulver, kanel, oregano, og sukker. Stek et par minutter mens du r??rer litt innimellom.</p>

            <p>3 Tilsett b??nner, hakkede tomater, kakao eller hakket m??rk sjokolade og finhakket koriander. R??r alt godt sammen. Smak til med salt og pepper.</p>

            <p>4 La retten surre p?? lav varme under lokk i 15-20 minutter. R??r innimellom.</p>

            <p>5 Tilsett masse finhakket koriander like f??r servering, og server med kokt ris.</p>
        </div>
    `

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
    const posts = document.querySelector(".carousel")
    posts.style.display = ""
}