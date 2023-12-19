async function func() {
    await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/523909312")
    .then(response=>response.json()).then(s=>{
        console.log(s.tracks.data)
        let div=document.querySelector("div .fs-9")
        console.log(div)
        let p=document.querySelector(".album")
        console.log(p)
        p.innerHTML=`${s.tracks.data[0].album.title}`
        let image = document.querySelector(".imageAlbum")
        console.log(image)
        image.src= `${s.tracks.data[0].album.cover_medium}`
        s.tracks.data.forEach((e,index) => {
            let div2=document.createElement("div")
            div2.innerHTML=`<div class="row d-flex align-items-center text-white-50 fs-9 mt-3">
                                <div class="col-1 fs-5">
                                <p>${index+1}</p>
                                </div>
                                <div class="col-10">
                                <p class="m-0">${e.title}</p>
                                <p>${e.artist.name}</p>
                                </div>
                                <div class="col-1">
                                <p>${e.duration}</p>
                                </div> 
                            </div>`;
            div.appendChild(div2)
        });
    })  
}
func()


