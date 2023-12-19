console.log(window)

/*const progressBar = document.querySelector('.player-wrapper input');

        progressBar.addEventListener('input', function() {
            // Calcola la percentuale di avanzamento
            const percentage = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min) * 100;

            // Aggiorna il colore solo della parte sinistra del cursore
            progressBar.style.background = 'linear-gradient(to right, rgba(33, 215, 96, 0.84) ${percentage}%, rgba(167, 167, 167, 0.65) ${percentage}%)';
        });
*/
/*
let id="75621062"

let SiteURL = "https://striveschool-api.herokuapp.com/api/deezer/album"+"/"+id;
*/

/*
        <div class="card bg-gray-2 p-2">
            <div class="position-relative">
                <img src="https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/250x250-000000-80-0-0.jpg"
                    class="card-img-top rounded" alt="...">
                <i class="bi bi-spotify text-white position-absolute start-0 p-1 fs-10"></i>
                <p class="text-white fs-10 m-0 position-absolute bottom-0 p-1">albumName
                    </h5>
            </div>
            <div class="card-body p-0">
                <h5 class="card-title text-white fs-8 pt-3 pb-2 m-0">albumName</h5>
                <p class="card-text txt-gray-3 fs-10 pt-0 pb-2">Ascolta tutti gli ultimi
                    brani degli artisti che...</p>
            </div>
        </div>
*/

let SearchURL1 ="https://striveschool-api.herokuapp.com/api/deezer/search?q=Gemitaiz"
let SearchURL2 ="https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
let SearchURL3 ="https://striveschool-api.herokuapp.com/api/deezer/search?q=salmo"
let SearchURL4 ="https://striveschool-api.herokuapp.com/api/deezer/search?q=marracash"

async function fetchAll (a,b,c,d)
{
    let allData=[]
    await fetch(a).then(response => response.json()).then(json => {json.data.forEach(element => {
        allData.push(element)
    });})
    await fetch(b).then(response => response.json()).then(json => {json.data.forEach(element => {
        allData.push(element)
    });})
    await fetch(c).then(response => response.json()).then(json => {json.data.forEach(element => {
        allData.push(element)
    });})
    await fetch(d).then(response => response.json()).then(json => {json.data.forEach(element => {
        allData.push(element)
    });})
    console.log(allData)
    randomSelector(allData)
}

fetchAll (SearchURL1,SearchURL2, SearchURL3, SearchURL4)

function randomSelector (arr)
{
    let random=Math.floor(Math.random()*100)
    console.log(arr[random])
}

//Card creation
function CreateCard (Obj)
{
    let container = document.querySelector('.CardContainer');
    let CardDiv = document.createElement("div");//Crea CardDiv
    container.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "m-4", "col");
    CardDiv.style.width= "18rem";//Aggiungi classi e stile a CardDiv

    let imag = document.createElement("img");//Crea imag
    imag.classList.add("img-fluid");
    CardDiv.appendChild(imag);//imag dentro CardDiv
    imag.src=Obj.imageUrl;
    imag.alt=Obj._id;

    let CardBody = document.createElement("div");//Crea CardBody
    CardBody.classList.add("card-body");
    CardDiv.appendChild(CardBody);//CardBody dentro CardDiv

    let itemName = document.createElement("h5");//Crea CardBody
    itemName.classList.add("card-title");
    CardBody.appendChild(itemName);
    itemName.innerText=Obj.name;

    let brandName = document.createElement("p");//Crea CardBody
    brandName.classList.add("card-text");
    CardBody.appendChild(brandName);
    brandName.innerText=Obj.brand;

    let ItemDescription = document.createElement("p");
    ItemDescription.classList.add("card-text");
    CardBody.appendChild(ItemDescription);
    ItemDescription.innerText=Obj.description

    let cost = document.createElement("p");
    cost.classList.add("card-text");
    CardBody.appendChild(cost);
    cost.innerText=Obj.price +"€";

    let deletionButton = document.createElement("button");
    deletionButton.classList.add("btn","btn-danger", "d-none", "DeletionButton");
    CardBody.appendChild(deletionButton);
    deletionButton.innerText="Delete from server"

    let editingButton = document.createElement("button");
    editingButton.classList.add("btn","btn-success", "d-none", "EditButton");
    CardBody.appendChild(editingButton);
    editingButton.innerText="Edit item"

    console.log(Obj)
}
/*document.addEventListener('DOMContentLoaded', () => {

    if (location.href.includes("homepage.html")) {

        let url = new URL(location.href);

        let id = url.searchParams.get('id');

        readDataById(id);
    }
    
})*/

// Artisti Album Search
/*
GetAllData()

function GetAllData ()
{
    fetch(SiteURL).then(response => response.json()).then(json => {CreateCard(json)})
}
function CreateCard (obj)
{
    console.log(obj)
}

function test()
{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album", { method: "GET" })
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    createList(obj);
  })
  .catch((error) => console.log("Error!! " + error));
}
//test()
*/