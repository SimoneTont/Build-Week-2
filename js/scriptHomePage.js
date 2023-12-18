console.log(window)

/*const progressBar = document.querySelector('.player-wrapper input');

        progressBar.addEventListener('input', function() {
            // Calcola la percentuale di avanzamento
            const percentage = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min) * 100;

            // Aggiorna il colore solo della parte sinistra del cursore
            progressBar.style.background = 'linear-gradient(to right, rgba(33, 215, 96, 0.84) ${percentage}%, rgba(167, 167, 167, 0.65) ${percentage}%)';
        });
*/
let ID="75621062"
let URL = "https://striveschool-api.herokuapp.com/api/deezer/album/"+ID;

GetAllData()

let allData=[]

function GetAllData ()
{
    fetch(URL).then(response => response.json()).then(json => {CreateCard(json)})
}
function CreateCard (obj)
{

    if(obj.error==undefined)
    {
        allData.push(obj)
    }
    console.log(allData)
    console.log(allData[0].error)
}

/*const apiUrl = "https://striveschool-api.herokuapp.com/api/deezer/album";
let allData = [];

function getAllData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      allData = allData.concat(data.items);

      if (data.nextPage) {
        return getAllData(data.nextPage);
      } else {
        console.log('Tutti i dati sono stati ottenuti:', allData);
        return allData;
      }
    })
    .catch(error => {
      console.error('Errore durante la richiesta API:', error);
    });
}

getAllData(apiUrl);*/