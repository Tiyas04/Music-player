let audio1 = new Audio(`I Wanna Be Yours.mp3`)
let audio2 = new Audio(`A Thousand Years.mp3`)
let audio3 = new Audio(`Infinity.mp3`)
let audio4 = new Audio(`So Many Things I do.mp3`)
let audio5 = new Audio(`Sweater Weather.mp3`)
let isPlay = false
let name = document.body.getElementsByClassName(`name`)[0]
let volumeup = document.body.getElementsByClassName(`high-volume`)[0]
let volumedown = document.body.getElementsByClassName(`volume-down`)[0]
let playbutton = document.body.getElementsByClassName(`play`)[0]
let forwardbutton = document.body.getElementsByClassName(`fast-forward`)[0]
let reversebutton = document.body.getElementsByClassName(`rewind`)[0]
let player = document.body.querySelector(`#player`)
let audio = audio1

const song = (track, songName) => {
    audio.pause()
    audio = track
    name.innerHTML = songName
    playbutton.src = `play.png`
    isPlay = false
    audio.currentTime = 0
}

const music = () => {
    name.innerHTML = `I Wanna Be Yours`
    playbutton.addEventListener("click", () => {
        if (isPlay === false) {
            audio.play()
            playbutton.src = `video-pause-button.png`
            setInterval(() => {
                player.value = audio.currentTime
                player.max = audio.duration
            }, 50);
            isPlay = true
        }
        else {
            audio.pause()
            playbutton.src = `play.png`
            isPlay = false
        }
    })
    player.addEventListener("input", () => {
        audio.play()
        audio.currentTime = player.value
        playbutton.src = `video-pause-button.png`
        isPlay = false
    })
    volumeup.addEventListener("click", () => {
        if (audio.volume < 1) {
            audio.volume += 0.01
        }
    })
    volumedown.addEventListener("click", () => {
        if (audio.volume > 0) {
            audio.volume -= 0.01
        }
    })
    forwardbutton.addEventListener("click", () => {
        if (audio === audio1) {
            song(audio2, "A Thousand Years")
        } else if (audio === audio2) {
            song(audio3, "Infinity")
        } else if (audio === audio3) {
            song(audio4, "So Many Things I do")
        }else if (audio === audio4) {
            song(audio5, "Sweater Weather")
        }else if (audio === audio5) {
            song(audio1, "I Wanna Be Yours")
        }
        audio.play()
        playbutton.src = `video-pause-button.png`
    });

    reversebutton.addEventListener("click", () => {
        if (audio === audio1) {
            song(audio5, "Sweater Weathery")
        } else if (audio === audio2) {
            song(audio1, "I Wanna Be Yours")
        } else if (audio === audio3) {
            song(audio2, "A Thousand Years")
        } else if (audio === audio4) {
            song(audio3, "Infinity")
        } else if (audio === audio5) {
            song(audio4, "So Many Things I do")
        }
        audio.play()
        playbutton.src = `video-pause-button.png`
    });
   
}
music()