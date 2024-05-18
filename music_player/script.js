let data = {
    title: [
        "Leonard Cohen - My oh my",
        "Chris Rea - And You My Love",
        "Dire Straits - You and your friend",
        "Bee Gees - Stayin' Alive",
    ],
    song: [
        "music/Leonard Cohen - My Oh My (Audio).mp3",
        "music/Chris Rea _And You My Love_.mp3",
        "music/Dire Straits - You and your friend.mp3",
        "music/Bee Gees - Stayin' Alive (Official Music Video).mp3",
    ],
    poster: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5gW6wTma5kmb1BWA0UGnx1FZs3AIerGbGp5ZK39Sqw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuega5hteaDKQqu6j4Q8VfoifWPxOA9GU14XlWkvIaKw&s",
        "https://i.discogs.com/uOmoR4Ig8zUclUvpzC-Dt1ish0yX5xVTqD5XMxXfA24/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyOTU0/MzItMTU0MTM0NzE4/Ny02ODg5LmpwZWc.jpeg",
        "https://static.stereogum.com/uploads/2019/11/The-Bee-Gees-Stayin-Alive-1574874474-520x520.jpg",
    ],
}

let song = new Audio

window.onload = function () {
    playSong()
}

let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]

    let img = document.getElementsByClassName("row1")[0]
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")"

    let main = document.getElementsByClassName("main")[0]
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"

    song.play()
}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")[0]
    let position = (song.currentTime / song.duration) * 99
    fill.style.marginLeft = position + "%"

    convertTime(song.currentTime)

    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")[0]

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    let durMin = Math.floor(song.duration / 60)
    let durSec = Math.floor(song.duration % 60)

    durMin = (durMin < 10) ? "0" + durMin : durMin
    durSec = (durSec < 10) ? "0" + durSec : durSec

    currentTime.textContent = min + " : " + sec + " / " + durMin + " : " + durSec
}

function prev() {
    currentSong--
    play = document.getElementById("play")
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/pause.png"
}

function next() {
    currentSong++
    play = document.getElementById("play")
    if (currentSong > data.song.length - 1) {
        currentSong = 0
    }

    playSong()
    play.src = "images/pause.png"
}

function mute() {
    let mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease() {
    let mute = document.getElementById("mute")
    song.volume -= 0.2
    if (song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
        song.muted = true
    }

}
function increase() {
    let mute = document.getElementById("mute")
    song.volume += 0.2
    if (song.volume > 0.1) {
        mute.src = "images/volume.png"
        song.muted = false
    }
}
