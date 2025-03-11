let audio1 = new Audio(`I Wanna Be Yours.mp3`)
let isPlay = false
let img = document.body.getElementsByClassName(`image`)
const music = () => {
    let playbutton = document.getElementsByClassName(`play`)
    playbutton.addEventListener("click", () => {
        if (isPlay === false) {
            audio1.play()
            playbutton.src = `video-pause-button.png`
            isPlay = true
        }
        else {
            audio1.pause()
            playbutton.src = `play.png`
            isPlay = false
        }
    })
}
music()