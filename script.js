let songs = [
    {src:"songs/1.mp3", name: "Amarillo" , image: "covers/1.png"},
    {src:"songs/2.mp3", name: "Azul" , image: "covers/2.jpg"},
    {src:"songs/3.mp3", name: "Rojo " , image: "covers/3.jpg"},
    {src:"songs/4.mp3", name: "Rosa" , image: "covers/4.jpg"},
    {src:"songs/5.mp3", name: "Morado" , image: "covers/5.jpg"},
    {src:"songs/6.mp3", name: "Verde " , image: "covers/6.jpg"},
    {src:"songs/7.mp3", name: "Negro" , image: "covers/7.jpg"},
    {src:"songs/8.mp3", name: "Gris" , image: "covers/8.jpg"},
    {src:"songs/9.mp3", name: "Arcoiris " , image: "covers/9.jpg"},
    {src:"songs/10.mp3", name: "Blanco " , image: "covers/10.png"}
];


// audio player in html
let audioPlayerOfHtml = document.getElementById('audioPlayerOfHtml');


// next button for next song
let nextOrPrevSongcount = 0;
function nextOrPrevSong(x){
    nextOrPrevSongcount += x;
    if(nextOrPrevSongcount < 0){
        nextOrPrevSongcount = 0
    }
    else if(nextOrPrevSongcount > songs.length-1){
        nextOrPrevSongcount = songs.length -1
    }
    nextOrPrevSong2()
}

// add first song automaticaly 
let firstSong = songs[0].src;
let firstSongName = songs[0].name;
audioPlayerOfHtml.src = firstSong;

// song name.....
let currentSongName = document.querySelector('.currentSongName');
// display first song name auto...
currentSongName.innerHTML = firstSongName;


function nextOrPrevSong2(){
    
    let currentSong = songs[nextOrPrevSongcount];
    let src = currentSong.src;
    let name = currentSong.name;
    
    currentSongName.innerHTML = name;
    audioPlayerOfHtml.src = src;
    pauseSongFuntion()
    setTimeout(() => {
        
        playSongFuntion()
    }, 100 );

    let songDetails = document.getElementsByClassName('songDetails')
    songDetails[nextOrPrevSongcount].classList.add('classForControllPeronalPlayPause')

}


// song Player Container for add class (bigClassForControll) to changes
let songPlayerContainer = document.querySelector('.songPlayerContainer')

// play the song
play.addEventListener('click', playSongFuntion);

function playSongFuntion(){
    audioPlayerOfHtml.play();
    songPlayerContainer.classList.add('bigClassForControll')
    
    let songDetails = document.getElementsByClassName('songDetails')
    songDetails[nextOrPrevSongcount].classList.add('classForControllPeronalPlayPause')
}

// pause the song
pause.addEventListener('click', pauseSongFuntion);

function pauseSongFuntion(){
    removePauseIconFromAll()
    audioPlayerOfHtml.pause()
    songPlayerContainer.classList.remove('bigClassForControll')
    
    
}

// putting song list
let songsPlaylist = document.querySelector('.songsPlaylist') 

songs.forEach((element, index) => {
    

    songsPlaylist.innerHTML += `<div class="songDetails">
                                    <img src="${element.image}" alt="">
                                    <span class="songName">${element.name}</span>
                                    <i class="fa fa-play-circle-o personalPlay" aria-hidden="true"  ></i>
                                    <i class="fa fa-pause-circle-o personalPause" aria-hidden="true"  onclick="pauseSongFuntion()"></i>
    
                                </div>`
});

// event listener on personal play
let personalPlay = document.getElementsByClassName('personalPlay')

Array.from(personalPlay).forEach((element,index) => {
    
    
    element.addEventListener('click', (e)=>{
       removePauseIconFromAll()
        if(nextOrPrevSongcount != index){

            nextOrPrevSongcount = index;
            nextOrPrevSong2()
        }
        else{
            playSongFuntion()
        }
        /* class(classForControllPeronalPlayPause) for add in js for personal song pause and plaY */
       e.target.parentNode.classList.add('classForControllPeronalPlayPause');
        
    
    });
});

// function for remove class for sho play icon.............
function removePauseIconFromAll(){
    let songDetails = document.getElementsByClassName('songDetails')
    for (const iterator of songDetails) {
        iterator.classList.remove('classForControllPeronalPlayPause')
    }
}


// event listener on personal Pause............
let personalPause = document.getElementsByClassName('personalPause')
for (const iterator of personalPause) {
    
    iterator.addEventListener('click', (e)=>{
    
        /* class(classForControllPeronalPlayPause) for remove in js for personal song pause and plaY */
       e.target.parentNode.classList.remove('classForControllPeronalPlayPause');
        
    
    });


};

