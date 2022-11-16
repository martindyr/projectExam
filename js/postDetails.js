// Place to display post details
const detailsContainer = document.querySelector(".postDetailsContainer")

// Get id from querystring
const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

// Adding the ID to the URL
url = "https://sd.flowerpoweraveroy.one/wp-json/wp/v2/posts/" + id

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

    detailsContainer.innerHTML = `
        <div class="sectionHeaderContainer">
            <div>
                <h2>${details.title.rendered}</h2>
            </div>
        </div>

        <div class="detailsHeader">
            <img src="${details.jetpack_featured_media_url}" alt=""></img>
            <div>
                <h3>Ingredients</h3>
                <div id="ingredientList">
                    <p>400 g kjøttdeig eller karbonadedeig</p>
                    <p>2 ss margarin eller olje til steking</p>
                    <p>1 stk. finhakket løk</p>
                    <p>2 båter finhakket hvitløk</p>
                    <p>1 stk. finhakket rød chili</p>
                    <p>1 boks hermetiske tomater</p>
                    <p>1 boks chilibønner</p>
                    <p>1 stk. rød paprika i biter</p>
                    <p>1 stk. grønn paprika i biter</p>
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
            <p>If this was not a dummy text, it would be a step-by-step on how to create the dish above. This text is also requested from WP. The description would be something like this:</p>

            <p>1 Fres finhakket løk, hvitløk, og chili, sammen med hakket rød og gul paprika i en gryte på middels varme. Tilsett tomatpuré og la det frese et par minutter.</p>

            <p>2 Tilsett spisskummen, paprikapulver, kanel, oregano, og sukker. Stek et par minutter mens du rører litt innimellom.</p>

            <p>3 Tilsett bønner, hakkede tomater, kakao eller hakket mørk sjokolade og finhakket koriander. Rør alt godt sammen. Smak til med salt og pepper.</p>

            <p>4 La retten surre på lav varme under lokk i 15-20 minutter. Rør innimellom.</p>

            <p>5 Tilsett masse finhakket koriander like før servering, og server med kokt ris.</p>
        </div>
    `

}