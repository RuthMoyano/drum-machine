// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio ('sounds/kick-drum.mp3')
const snare = new Audio ('sounds/snare-drum.mp3')
const hi = new Audio ('sounds/hi-hat.mp3')
const count = document.querySelector("#timer")

let timerCount = 0
let displayCount = 1
// This function is called every 600ms
function update() {
    const metronome = document.querySelector('#metronome')
    const kickDrum = document.querySelector('#kick-drum')
    const snareDrum = document.querySelector('#snare-drum')
    const hiHat = document.querySelector('#hi-hat')
    if (metronome.checked){
        const count = document.querySelector('#timer')
        count.innerText = num
        if (timerCount%4===0){
            tock.play()
        } else{
            tick.play();
        }
        timerCount++
    } else if(kickDrum.checked){
        kick.play()
    } else if(snareDrum.checked){
        snare.play()
    } else if(hiHat.checked){
        hi.play()
    }
    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
