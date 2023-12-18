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
let allData=[]

let SearchURL3 ="https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"

fetch(SearchURL3).then(response => response.json()).then(json => {GetData(json.data)})

function GetData (arr)
{
    arr.forEach(element => {
        allData.push(element)
    });
    console.log(allData)
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