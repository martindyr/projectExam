// ==== LOAD MORE DINNERS ===

// API get request link
const url = "http://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts"

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
            if (allPosts[i].categories[0] === 17) {
                dinnerObject.push(allPosts[i])
            }
        }
        console.log(dinnerObject)
        loadDinners()



    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

// Show 3 dinners
// Every time button is pressed - show 3 more dinners

loadBtn.addEventListener("click", loadDinners)

let posts = 0

function loadDinners() {

    for (let i = posts; i < posts + 3; i++) {
        dinnerContainer.innerHTML +=
            `<img src="" alt=""></img>
            <p>${dinnerObject[i].title.rendered}</p>`
    }
    posts += 3
}

getAllPosts()



