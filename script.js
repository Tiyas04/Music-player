let audio = new Audio(`I Wanna Be Yours.mp3`)
let isPlay = false
let img = document.body.getElementsByClassName(`image`)[0]
let name = document.body.getElementsByClassName(`name`)[0]
let volumeup = document.body.getElementsByClassName(`high-volume`)[0]
let volumedown = document.body.getElementsByClassName(`volume-down`)[0]
let playbutton = document.body.getElementsByClassName(`play`)[0]
let player = document.body.querySelector(`#player`)
player.max = audio.duration
player.value = audio.currentTime
name.innerHTML = `I Wanna Be Yours`
const music = () => {
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
    player.addEventListener("input",() =>{
        audio.play()
        audio.currentTime = player.value
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
}
music()