

let inputElement = document.querySelector('.prova');

inputElement.addEventListener('change', function() {
    // Ottieni il valore dell'input e salvalo in una variabile
    let query = inputElement.value;
rimuovi();
faiIlFetch(query);


    // Puoi utilizzare la variabile 'query' per le tue necessità
   // console.log(query); // Ad esempio, stampa il valore nella console
});
async function faiIlFetch(lol) {
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${lol}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        console.log(data); // Per il debugging

        if (data && data.data && data.data.length > 0) {
            creaCard(data.data[1]); // Passa solo il primo artista a creaCard
        } else {
            console.log("Nessun risultato trovato");
        }
    } catch (error) {
        console.log("ERRORE", error);
    }
}


function rimuovi(){
    let divDaSvuotare = document.querySelectorAll('.ricercheRecenti')
    divDaSvuotare.forEach(elemento => {
        elemento.innerHTML = "";
    })
}




// inputElement.addEventListener('change', function() {
//     // Ottieni il valore dell'input e salvalo in una variabile
//     let query = inputElement.value;
// rimuovi();
// faiIlFetch(query);


//     // Puoi utilizzare la variabile 'query' per le tue necessità
//    // console.log(query); // Ad esempio, stampa il valore nella console
// });
// async function faiIlFetch(lol) {
//     try {
//         let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${lol}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         let data = await response.json();
//         console.log(data); // For debugging

//         if (data && data.data && data.data.length > 0) {
//             creaCard(data.data); // Pass the entire array to creaCard
//         } else {
//             console.log("Nessun risultato trovato");
//         }
//     } catch (error) {
//         console.log("ERRORE", error);
//     }
// }



// function rimuovi(){
//     let divDaSvuotare = document.querySelectorAll('.ricercheRecenti')
//     divDaSvuotare.forEach(elemento => {
//         elemento.innerHTML = "";
//     })
// }
function creaCard(dati) {
    let html = `
        <div class="row align-items-start">
            <div class="col ombra">
               <p class="fs-3 text-white">Risultato più rilevante</p>
                <div class="arts">
                    <img src="${dati[0].album.cover_medium}" id="immagine"  alt="artista">
                    <p class="fs-3 text-white mt-3">${dati[0].artist.name}</p>
                    <p class="fs-4 text-white fw-bold">Artista</p>
                </div>
            </div>
            <div class="col" style="color: white;">
                <p class="fs-3 pt-3">Brani</p>
    `;

    dati.slice(0,4).forEach(dato => {
        html += `
            <div class="brano d-flex">
                <img src="${dato.album.cover_small}">
                <div class="d-flex flex-column">
                <p class="titolo">${dato.title}</p>
                <p class="artisti">${dato.artist.name}</p>
                </div>
            </div>
        `;
    });
   
    html += `</div></div>`;
    html+= `<p class="fs-3 text-white text-start">Artisti</p>
    <div class="container d-flex flex-wrap">
           
    
    `
    dati.forEach(dato=>{
        html +=`  <div class="musica cardArtisti" >
       
        <img  src="${dato.artist.picture}" class="imgArtisti" alt="musica">
        <p class="text-white fs-4">${dato.artist.name}</p>
        <p class="text-light fs-6">Artista </p>
      </div>`
    })
    html += `</div>`
    let container = document.querySelector('.centrale');
    container.innerHTML = html;
}
