let SearchButton=document.querySelector(".SearchButton");
let SearchAnime=document.querySelector(".SearchAnime");
let ContentHeading=document.querySelector(".ContentHeading");
let heading=document.querySelector(".heading");
let display=document.querySelector(".display");
let type=document.querySelector(".type span");
let source=document.querySelector(".source span");
let episodes=document.querySelector(".episodes span");
let string=document.querySelector(".string span");
let duration=document.querySelector(".duration span");
let rating=document.querySelector(".rating span");
let synopsis=document.querySelector(".synopsis");
let year=document.querySelector(".year span");
let status=document.querySelector(".status span");
let score=document.querySelector(".score span");
let ImageAnime=document.querySelector(".AnimeName img");
let SearchAnimeContent=document.querySelector(".SearchAnimeContent");
let SearchButtonContent=document.querySelector(".SearchButtonContent");
let WatchTrailer=document.querySelector(".WatchTrailer");
let wait=document.querySelector(".wait");

let NameofAnime;
let data;
wait.style.visibility="hidden";
const getInfo=async()=>{
    wait.style.visibility="visible";
    const baseUrl = 'https://api.jikan.moe/v4';  // Define the base URL
    const searchUrl = `${baseUrl}/anime?q=${NameofAnime}`;   // Example: Search for an anime
    let respone= await fetch(searchUrl);
    data=await respone.json();
    display.innerText=data.data[0].title_english;           //puting values from server
    type.innerText=data.data[0].type;
    source.innerText=data.data[0].source;
    episodes.innerText=data.data[0].episodes;
    string.innerText=data.data[0].aired.string;
    duration.innerText=data.data[0].duration;
    rating.innerText=data.data[0].rating;
    synopsis.innerText=data.data[0].synopsis.replace(/^\s*\n/gm, "");
    year.innerText=data.data[0].year;
    status.innerText=data.data[0].status;
    score.innerText=data.data[0].score;
    ImageAnime.src=data.data[0].images.jpg.large_image_url;
    WatchTrailer.value=data.data[0].trailer.url;
    wait.style.visibility="hidden";
    ContentHeading.style.visibility="visible";
}

function showInfo(){
heading.style.visibility="hidden";
ContentHeading.style.visibility="hidden";
    getInfo();
}


SearchButton.addEventListener("click",()=>{
    NameofAnime=SearchAnime.value;
    showInfo();
});

SearchButtonContent.addEventListener("click",()=>{
    NameofAnime=SearchAnimeContent.value;
    showInfo();
});

// SearchAnime.addEventListener('keyup',(e)=>{
//     if(e.keyCode===13){
//         NameofAnime=SearchAnime.value;
//         showInfo();
//     }
// });
// SearchAnimeContent.addEventListener('keyup',(e)=>{
//     if(e.keyCode===13){
//         NameofAnime=SearchAnime.value;
//         showInfo();
//     }
// });

function gotoLink(link){
    if(data.data[0].trailer.url){
    location.href=data.data[0].trailer.url;
    }else{
        alert("There are no videos of this Anime. Please search for videos of some other Anime.");
    }
}