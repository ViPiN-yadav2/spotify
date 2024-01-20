console.log("welcome to Spotify");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myProgressBar");
let audioElement = new Audio('songs/1.mp3')
let gif = document.getElementById("gif");
// let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "1.mp3", filePath: "songs/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "2.mp3", filePath: "songs/2.mp3", coverPath :"covers/2.jpg"},
    {songName: "3.mp3", filePath: "songs/3.mp3", coverPath :"covers/3.jpg"},
    {songName: "4.mp3", filePath: "songs/4.mp3", coverPath :"covers/4.jpg"},
    {songName: "5.mp3", filePath: "songs/5.mp3", coverPath :"covers/5.jpg"},
    {songName: "6.mp3", filePath: "songs/6.mp3", coverPath :"covers/6.jpg"},
    {songName: "7.mp3", filePath: "songs/7.mp3", coverPath :"covers/7.jpg"},
    {songName: "8.mp3", filePath: "songs/8.mp3", coverPath :"covers/8.jpg"},
    {songName: "9.mp3", filePath: "songs/9.mp3", coverPath :"covers/9.jpg"},
    {songName: "10.mp3", filePath: "songs/10.mp3", coverPath :"covers/10.jpg"}
 ];
// audioElement.play();

// Play and pause audio 
masterPlay.addEventListener("click", ()=>{ 
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
        gif.style.opacity = "1";
    }
    else{
        audioElement.pause();
        console.log(masterPlay.classList);
        masterPlay.classList.remove('fa-solid', 'fa-pause');
        masterPlay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity = "0";
    }
});

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myprogressBar.value*audioElement.duration)/100;
})

songItem.forEach((element, i)=>{
    let img = element.getElementsByTagName("img")[0];
    img.setAttribute('src', songs[i].coverPath);
    // console.log(img.getAttribute('src'));

    let name = element.getElementsByClassName("songname")[0];
    name.innerHTML = songs[i].songName;
    // console.log(name);
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add("fa-regular", "fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        console.log(songIndex+1);
        // masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = "1";
        e.target.classList.remove("fa-regular", "fa-circle-play");
        e.target.classList.add('fa-solid', 'fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
    })
});

document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex == 0)
        songIndex = 0;
    else
        songIndex -= 1;
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = "1";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');

});
document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex >= 9)
        songIndex = 0;
    else
        songIndex += 1;
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = "1";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
});