

async function func() {
    await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/523909312")
    .then(response=>response.json()).then(s=>{
        console.log(s.tracks.data)
        let div=document.querySelector("div .fs-9")
        //console.log(div)
        let p=document.querySelector(".album")
        //console.log(p)
        p.innerHTML=`${s.tracks.data[0].album.title}`
        let image = document.querySelector(".imageAlbum")
        //console.log(image)
        image.src= `${s.tracks.data[0].album.cover_medium}`
        let image2 = document.querySelector("p img")
        console.log(image2)
         image2.src= `${s.tracks.data[0].album.cover_medium}`
        let span=document.querySelector("span")
        console.log(span)
        let durata=0
        s.tracks.data.forEach((e,index) => {
            durata+=(parseInt(e.duration/60))
            let div2=document.createElement("div")
            div2.innerHTML=`<div class="row d-flex align-items-center text-white-50 fs-9 mt-3 cursore">
                                <div class="col-1 fs-5">
                                <p>${index+1}</p>
                                </div>
                                <div class="d-flex col-10">
                                <img style: width=35em src="${e.album.cover_small}">
                                <p class="ms-2 text-white m-0">${e.title}
                                <br>${e.artist.name}</p>
                                </div>
                                <div class="col-1">
                                <p>${parseInt(e.duration/60)}:00 min</p>
                                </div> 
                            </div>`;
            div.appendChild(div2)
        });
        span.innerHTML=` ${s.tracks.data[0].artist.name} - num. Brani ${s.tracks.data.length} - durata ${durata}   min`
    })  
}
func()


