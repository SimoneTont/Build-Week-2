console.log(window)

let SearchURL1 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Gemitaiz"
let SearchURL2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
let SearchURL3 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=salmo"
let SearchURL4 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=marracash"

async function fetchAll(url1, url2, url3, url4) {
    let allData = []
    await fetch(url1).then(response => response.json()).then(json => {
        json.data.forEach(element => {
            allData.push(element)
        });
    })
    await fetch(url2).then(response => response.json()).then(json => {
        json.data.forEach(element => {
            allData.push(element)
        });
    })
    await fetch(url3).then(response => response.json()).then(json => {
        json.data.forEach(element => {
            allData.push(element)
        });
    })
    await fetch(url4).then(response => response.json()).then(json => {
        json.data.forEach(element => {
            allData.push(element)
        });
    })
    console.log(allData)
    randomSelector(allData)
}

fetchAll(SearchURL1, SearchURL2, SearchURL3, SearchURL4)

function randomSelector(arrObj) {
    let arrControllo = []
    let CContainers = document.querySelectorAll('.CardContainer');

    for (let i = 0; i < (CContainers.length * 4); i++) {
        let random

        do {
            random = Math.floor(Math.random() * 100);
        }
        while (arrControllo.includes(arrObj[random].album.title)); //Se titolo album è già in arrcontrollo ripeti
        arrControllo.push(arrObj[random].album.title);

        CreateCard(arrObj[random])
    }
    /* let numeroEstratto;
        do {
            numeroEstratto = (Math.ceil(Math.random() * 76));
        } while (numeriEstratti.includes(numeroEstratto));
        numeriEstratti.push(numeroEstratto); */
}

let c = 0 //contatore funzione
let n = 0 //contatore righe
//Card creation
function CreateCard(Obj) {

    let CardContainers = document.querySelectorAll('.CardContainer');
    let CurrentCardContainer = CardContainers[n]

    let CardDiv = document.createElement("div");//Crea CardDiv
    CurrentCardContainer.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "col", "bg-gray-2", "p-2", "mx-2", "overflow-hidden");
    CardDiv.style.width= "10em";
    //CardDiv.style.height = "20em";//Aggiungi classi e stile a CardDiv

    let relativeCardDiv = document.createElement("div")
    CardDiv.appendChild(relativeCardDiv);//div relative
    relativeCardDiv.classList.add("position-relative");

    let imag = document.createElement("img");//Crea imag
    imag.classList.add("card-img-top", "rounded");
    relativeCardDiv.appendChild(imag);//imag dentro relativeCardDiv
    imag.src = Obj.album.cover;
    imag.alt = Obj.album.md5_image;

    let cardIcon = document.createElement("i") //Icona Spotify
    cardIcon.classList.add("bi", "bi-spotify", "text-white", "position-absolute", "start-0", "p-1", "fs-10",)
    relativeCardDiv.appendChild(cardIcon);

    let albumTitle1 = document.createElement("p");//Titolo Album1
    albumTitle1.classList.add("text-white", "fs-10", "m-0", "position-absolute", "bottom-0", "p-1");
    relativeCardDiv.appendChild(albumTitle1); //Sopra immagine album
    albumTitle1.innerText = Obj.album.title;

    //Fine div relative, inizio cardBody

    let CardBody = document.createElement("div");//Crea CardBody
    CardBody.classList.add("card-body");
    CardDiv.appendChild(CardBody);//CardBody dentro CardDiv

    let albumTitle2 = document.createElement("h5");//Titolo Album2
    albumTitle2.classList.add("card-title", "text-white", "fs-8", "pt-3", "pb-2", "m-0");
    CardBody.appendChild(albumTitle2); //Sotto immagine album
    albumTitle2.innerText = Obj.album.title;

    let flavorText = document.createElement("p");
    flavorText.classList.add("card-text", "txt-gray-3", "fs-10", "pt-0", "pb-2")
    CardBody.appendChild(flavorText);
    flavorText.innerText = "Descrizione canzone"

    console.log(Obj)
    c++
    if (c % 4 === 0) {
        n++
    }
    console.log(c)
    console.log(n)
}