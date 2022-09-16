// API get request link
const url = "http://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts"

// Tagerget place to generate HTML
const postListContainer = document.querySelector(".postListContainer")

// Categorie 17  = mainCourse
// Categorie 18  = dessert
// Categorie 19  = appetizer

//Fetching API from Wordpress
async function getPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const posts = data
        console.log(posts)

        createHtml(posts)
    } catch {
        alert("Sorry chef, this website is currenty not working. I'm sorry for the inconvinience this has caused you.")
    }
}

// Generating the posts from Wordpress API
function createHtml(posts) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].categories[0] === 17) {

            postListContainer.innerHTML += `
            <p>
                Main course meals:
                ${posts[i].title.rendered}
            </p>
        `
        }
        if (posts[i].categories[0] === 18) {
            postListContainer.innerHTML += `
            <p>
                Desserts:
                ${posts[i].title.rendered}
            </p>
        `
        }
        if (posts[i].categories[0] === 19) {
            postListContainer.innerHTML += `
            <p>
                Appetizers:
                ${posts[i].title.rendered}
            </p>
        `
        }
    }

}

getPosts()
