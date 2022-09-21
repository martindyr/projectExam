// Place to display post details
const detailsContainer = document.querySelector(".postDetailsContainer")

// Get id from querystring
const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

// Adding the ID to the URL
url = "http://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts/" + id

// Using the Dynamic URL to fetch data from spesific pokemon
async function getOnePost() {
    try {
        const response = await fetch(url)
        const details = await response.json()

        console.log('Here is details', details)

        createHtml(details)

    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

getOnePost()

// Creating the HTML from the spesific URL
function createHtml(details) {

    // Changning the document title to the post name
    document.title = details.title.rendered

    detailsContainer.innerHTML = `<p style="padding-left: 5px"></p>`

}